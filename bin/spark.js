#!/usr/bin/env node
'use strict';

// use nconf

var program = require('commander');

var compileCommand = require('../lib/commands/compile');
var flashCommand = require('../lib/commands/flash');

// add commands alphabetically sorted
program.version(require('../package.json').version);
  
program.command('cloud', 'Spark Cloud commands');

program.command('compile <path>')
  .description('Compiles one or more source files or a directory of source to a firmware binary for the Spark Core, or in the case of code errors will display those instead.')
  .option('-c, --cloud', 'Compile firmware using a Spark Cloud server')
  .action(compileCommand)
  .on('--help', function () {
    console.log('  Examples:');
    console.log('    spark compile firmware.bin');
    console.log('    spark compile source_folder');
    console.log('    spark compile file1.ino file2.cpp file2.h file3.cpp');
    console.log('');
  });

// @TODO
// program.command('doctor', 'check the core\'s external flash');

program.command('flash <path> [coreId]')
  .description('Flash firmware on core. You can also substitute "tinker", "voodoo", or "cc3000" to flash the provided app.')
  .option('-c, --cloud', 'Remotely push a compiled firmware binary to one of your cores over the air')
  .action(flashCommand);

program.command('keys', 'manage core keys');

program.command('local', 'local commands');

program.command('serial', 'manage core via serial connection');

program.command('servers', 'manage custom servers');

program.command('setup', 'setup a Spark board');

program.command('shortcuts', 'call Spark Cloud functions or get Spark Cloud variables');

program.command('variable', 'show Spark variables');


// run
program.parse(process.argv);

// print help and exit if not enough arguments are provided
if (!process.argv.slice(2).length) {
  program.help();
} 
