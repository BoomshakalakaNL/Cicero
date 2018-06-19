/*
const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');


const declaratiePath = path.resolve(__dirname, 'contracts', 'Declaratie.sol');
const source = fs.readFileSync(declaratiePath, 'utf8');
const output = solc.compile(source,1).contracts;

module.exports = output;
*/

const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath); // delete build folder and it's depricated contents

const declaratiePath = path.resolve(__dirname, 'contracts', 'Declaratie.sol');
const source = fs.readFileSync(declaratiePath, 'utf8');
const output = solc.compile(source,1).contracts;

fs.ensureDirSync(buildPath); //create build folder

for (let contract in output){
  var filename = contract.replace(':', '') + '.json';
  fs.outputJsonSync(
    path.resolve(buildPath, filename),
    output[contract]
  );
}
