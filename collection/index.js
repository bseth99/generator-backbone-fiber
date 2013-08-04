'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var CollectionGenerator = module.exports = function CollectionGenerator(args, options, config) {
   // By calling `NamedBase` here, we get the argument to the subgenerator call
   // as `this.name`.
   yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(CollectionGenerator, yeoman.generators.NamedBase);

CollectionGenerator.prototype.files = function files() {
   this.name = this.name.toLowerCase();
   this.template('_base.js', 'app/scripts/models/' + this.name + '.js');
};
