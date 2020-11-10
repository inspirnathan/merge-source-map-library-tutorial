const fs = require('fs');
const MagicString = require('magic-string');

const code = fs
  .readFileSync('input.txt', 'utf8')
  .replace(/\s/g,'');

const s = new MagicString(code);

const pattern = /😃/g;

let match;

while ((match = pattern.exec(code))) {
  const start = match.index;
  const end = start + match[0].length;
  s.overwrite(start, end, `console.log('happy');\n`);
}

const map = s.generateMap({
  source: 'input.txt',
  file: 'output-1.js.map',
  includeContent: true,
});

fs.writeFileSync(
  'output-1.js',
  s.toString() + '\n//# sourceMappingURL=' + 'output-1.js.map'
);
fs.writeFileSync('output-1.js.map', map.toString());

console.log('Generated output-1.js!');
console.log('Generated output-1.js.map!');