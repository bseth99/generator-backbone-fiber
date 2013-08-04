module.exports = function( grunt ) {

grunt.loadNpmTasks( 'grunt-contrib-copy' );
grunt.loadNpmTasks( 'grunt-text-replace' );
grunt.loadNpmTasks( 'grunt-contrib-requirejs' );
grunt.loadNpmTasks( 'grunt-contrib-jshint' );
grunt.loadNpmTasks( 'grunt-contrib-uglify' );
grunt.loadNpmTasks( 'grunt-contrib-clean' );
grunt.loadNpmTasks( "grunt-contrib-csslint" );
grunt.loadNpmTasks( "grunt-contrib-cssmin" );

grunt.initConfig({

   pkg: grunt.file.readJSON( 'package.json' ),

   jshint: {
      options: {
         jshintrc: '.jshintrc'
      },
      files: {
        src: [ 'app/scripts/**/*.js' ]
      }
   },

   csslint: {
      options: {
         csslintrc: ".csslintrc"
      },
      files: {
        src: [ 'app/styles/**/*.css' ]
      }
   },

   copy: {

      index: {
         files: [
            {expand: true, cwd: 'app/', src: ['index.html'], dest: 'dist/' }
         ]
      },
      styles: {
         files: [
            {expand: true, cwd: 'app/', src: ['styles/**'], dest: 'dist/' }
         ]
      },
      scripts: {
         files: [
            {expand: true, cwd: 'app/', src: ['scripts/**'], dest: 'dist/' }
         ]
      }
   },

   uglify: {

      app: {
         files: [
            {
               expand: true,
               cwd: 'app/',
               src: ['scripts/**/*.js'],
               dest: 'dist/',
               ext: '.js',
            },
         ],
      }

      /*
      *  Anything not optimized into bundle.js needs to be handled
      *  separately so its minified and copied to the correct spot
      *  under the dist folder.  For example:

      vendor: {
         files: [
            {
               expand: true,
               cwd: 'vendor_components/',
               dest: 'dist/scripts/vendor/',
               src: [
                  'moment.js'
               ]
            }
         ]
      }

      */
   },

   cssmin: {

      options: {
         keepSpecialComments: '*'
      },

      dynamic_mappings: {
         files: [
            {
               expand: true,
               cwd: 'app/',
               src: ['styles/**/*.css'],
               dest: 'dist/',
               ext: '.css',
            },
         ],
      }
   },

   replace: {
      version: {
         src: ['dist/index.html'],
         overwrite: true,
         replacements: [{
            from: 'data-main="config"',
            to: 'data-main="scripts/main"'
         },{
            from: /src=\".*\/require\.js\"/g,
            to: 'src="scripts/bundle.js"'
         }]
      }
   },

   requirejs: {
      compile: {
        options: {
           baseUrl: 'app/scripts',

           paths: {
              'requireLib': '../../bower_components/requirejs/require'
           },

           name: 'main',
           mainConfigFile: 'app/config.js',
           out: 'dist/scripts/bundle.js',

           include: ['requireLib'],

           optimize: 'uglify2'
         }
      }
   },

   clean: {
      src: [ 'dist/' ]
   }
});

grunt.registerTask( 'default', [ 'lint' ] );
grunt.registerTask( 'lint', [ 'jshint', 'csslint' ] );
grunt.registerTask( 'minify', [ 'uglify', 'cssmin' ] );
grunt.registerTask( 'reset', [ 'clean' ] );
grunt.registerTask( 'build', [ 'reset', 'lint', 'copy', 'minify', 'replace', 'requirejs' ] );

};
