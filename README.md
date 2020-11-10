# How to Use the Merge Map Library

## Learn how to merge source maps together!

This code supplements the tutorial at https://inspirnathan.com/posts/28-how-to-use-the-merge-map-library/

## Install Packages

To get started:
`npm install` or `npm i`

## First Transformer

To run the first example in the tutorial:
`node transformer-1`

This will create two files: `output-1.js` and `output-1.js.map`.

## Second Transformer

To run the first example in the tutorial:
`node transformer-2`

This will create two files: `output-2.js` and `output-2.js.map`.

## Merge the Source Maps Together

To combine the source maps, `output-1.js.map` and `output-2.js.map`, run the following:
`node merge-maps`

This will create a new combined source map, `merged.js.map` and will modify `output-2.js` to use this new source map.

## Running the Server
You can run a small web server using `npm start` to serve the `index.html` file included in this repo. It is currently set up to fetch `output-2.js` after running the previous steps.