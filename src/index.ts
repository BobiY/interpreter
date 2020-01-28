import acorn  = require('acorn/dist/acorn.js');

console.log(acorn.parse(`
    const a = 1;
    console.log(a)
`))