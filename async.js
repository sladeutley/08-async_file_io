#!/usr/local/bin/node

'use strict';

const { readFile } = require('fs');
const [ ,, filepath ] = process.argv;

//asynchronous way of doing things. use method 'readfile' of 'fs', then use it like below
readFile(filepath, (err, data) => {
    if (err) throw err;
    process.stdout.write(data);
})
