# Generator-backbone-fiber

A Yeoman generator for [Backbone.Fiber](https://github.com/bseth99/backbone-fiber).

- Installs Fiber and its dependencies via Bower
- Includes a starting Gruntfile to build and optimize your app
- Creates a starting directory structure
- Adds a simple index.html with entry points for RequireJS to lauch your app


## Getting started

- Make sure you have [yo](https://github.com/yeoman/yo) installed:
    `npm install -g yo`
- Install the generator: `npm install -g generator-backbone-fiber`
- Run: `yo backbone-fiber`
- Enter your application's name
- Sit back and relax while Yeoman sets things up


## More Goodies

      yo backbone-fiber:view <name>

Will create a view and template file in the app/scripts/views directory.  The file will be the same name as you enter on the command line.
This will become the module id you reference in the `data-view` attributes or the library calls to `connect` or `findChild`.  You can include
paths, so if you type:

      yo backbone-fiber:view foo/bar

bar.js and bar.html will be created in the app/scripts/views/foo directory.

You can also create models and collections:

      yo backbone-fiber:model <name>

      yo backbone-fiber:collection <name>

Both commands will create files of the same name in the app/scripts/models directory.  The difference between the two commands is the model
command will only create a model while the collection command will create both a model and a collection in the same file.


## Workflow

You develop and test in the app directory.  All external dependencies should either be installed via Bower or placed in the vendor_components folder.
Anything you want optimized into the preloaded bundle should be added as a dependency in the app/scripts/main.js.  That will ensure the RequireJS
optimizer sees it and pulls it into the production bundle file.  Running:

      grunt build

will optimize and copy everything into the dist folder which can then be deployed to your production environment.

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)
