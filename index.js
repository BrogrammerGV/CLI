#! /usr/bin/env node
var chalk       = require('chalk');
var clear       = require('clear');
var CLI         = require('clui');
var figlet      = require('figlet');
var inquirer    = require('inquirer');
var Preferences = require('preferences');
var Spinner     = CLI.Spinner;
var GitHubApi   = require('github');
var _           = require('lodash');
var git         = require('simple-git')();
var touch       = require('touch');
var fs          = require('fs');

clear();
console.log(
  chalk.red(
    figlet.textSync('Dirty Mike And The Boys', { horizontalLayout: 'full' })
  )
);


var userArgs = process.argv.slice(2);
var searchPattern = userArgs[0];
var exec = require('child_process').exec;
var child = exec('ls -a | grep ' + searchPattern, function(err, stdout, stderr) {
  console.log(
    chalk.red.bgWhite.bold(stdout));
});



console.log('Cole Is a God');