const fs = require('fs');
const MagicString = require('magic-string');

const code = fs
  .readFileSync('output-1.js', 'utf8')
  .replace(/\/\/# sourceMappingURL=output-1.js.map/g, '');

const s = new MagicString(code);

const pattern = /happy/g;

let match;

while ((match = pattern.exec(code))) {
  const start = match.index;
  const end = start + match[0].length;
  s.overwrite(start, end, `super happy`);
}

const map = s.generateMap({
  source: 'transformed-1.js',
  file: 'output-2.js.map',
  includeContent: true,
});

fs.writeFileSync(
  'output-2.js',
  s.toString() + '//# sourceMappingURL=' + 'output-2.js.map'
);
fs.writeFileSync('output-2.js.map', map.toString());

console.log('Generated output-2.js!');
console.log('Generated output-2.js.map!');