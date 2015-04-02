/**
 ******************************************************************************
 * @file    js/commands/CompileCommand.js
 * @author  Edoardo Tenani (edoardo.tenani@gmail.com)
 * @company TODO ( https://todo.to.it/ )
 * @source https://github.com/spark/spark-cli
 * @version V1.0.0
 * @date    01-April-2015
 * @brief   Compile commands module
 ******************************************************************************
Copyright (c) 2014 Spark Labs, Inc.  All rights reserved.

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation, either
version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this program; if not, see <http://www.gnu.org/licenses/>.
 ******************************************************************************
 */
 
var when = require('when');
var sequence = require('when/sequence');
var readline = require('readline');
var fs = require('fs');
var settings = require('../settings.js');
var path = require('path');

var extend = require('xtend');
var util = require('util');
var BaseCommand = require("./BaseCommand.js");

var CompileCommand = function (cli, options) {
  CompileCommand.super_.call(this, cli, options);
  this.options = extend({}, this.options, options);

  this.init();
};
util.inherits(CompileCommand, BaseCommand);
CompileCommand.prototype = extend(BaseCommand.prototype, {
  options: null,
  name: "lcompile",
  description: "Compiles Spark code",

  init: function () {
    this.addOption("firmware", this.compile.bind(this));
    //this.addOption(null, this.helpCommand.bind(this));
    
    this.addOption("*", this.flashSwitch.bind(this));
  },

  compile: function(firmware) {
    console.log('asd', firmware);
    // this.checkToolchain();
  },

  checkToolchain: function () {
    // check for repos in cache folder
    // copy repos in tmp folder
    // update application.cpp with custom files
  },

  flashSwitch: function() {
    console.log('asd')
  },

  _: null
});

module.exports = CompileCommand;
