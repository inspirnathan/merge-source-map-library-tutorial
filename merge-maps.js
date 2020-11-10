const fs = require('fs');
const merge = require('merge-source-map');

const oldMap = fs.readFileSync('output-1.js.map');
const newMap = fs.readFileSync('output-2.js.map');

const mergedMap = merge(JSON.parse(oldMap), JSON.parse(newMap));

fs.writeFileSync('merged.js.map', JSON.stringify(mergedMap));

const modified = fs
  .readFileSync('output-2.js')
  .toString()
  .replace(/output-2/g, 'merged');

fs.writeFileSync('output-2.js', modified);

console.log('Generated merged.js.map!');