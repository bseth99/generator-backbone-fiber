'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ViewGenerator = module.exports = function ViewGenerator(args, options, config) {
   // By calling `NamedBase` here, we get the argument to the subgenerator call
   // as `this.name`.
   yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(ViewGenerator, yeoman.generators.NamedBase);

ViewGenerator.prototype.files = function files() {
   this.name = this.name.toLowerCase();
   this.template('_base.js', 'app/scripts/views/' + this.name + '.js');
   this.write('app/scripts/views/' + this.name + '.html', '<!-- template file for view ' + this.name + ' -->');
};
