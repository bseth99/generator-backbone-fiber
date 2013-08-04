'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var BackboneFiberGenerator = module.exports = function BackboneFiberGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(BackboneFiberGenerator, yeoman.generators.Base);

BackboneFiberGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
      name: 'appName',
      message: 'What do you want to call your app?'
  }];


  this.prompt(prompts, function (props) {
    this.appName = props.appName;

    cb();
  }.bind(this));
};

BackboneFiberGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/styles');
  this.mkdir('app/scripts');
  this.mkdir('app/scripts/models');
  this.mkdir('app/scripts/views');
  this.mkdir('vendor_components');

  this.copy('_Gruntfile.js', 'Gruntfile.js');

  this.template('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');
  this.template('_README.md', 'README.md');

  this.template('_index.html', 'app/index.html');
  this.template('_config.js', 'app/config.js');
  this.template('_main.js', 'app/scripts/main.js');
};

BackboneFiberGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('jshintrc', '.jshintrc');
  this.copy('csslintrc', '.csslintrc');
  this.copy('gitignore', '.gitignore');
};
