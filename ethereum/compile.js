const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');


const declaratiePath = path.resolve(__dirname, 'contracts', 'Declaratie.sol');
const source = fs.readFileSync(declaratiePath, 'utf8');
const output = solc.compile(source,1).contracts;

module.exports = output;
