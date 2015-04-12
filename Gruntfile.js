module.exports = function(grunt) {
    'use strict';

    // Grunt Timing
    require('time-grunt')(grunt);

    // Initialize Config
    grunt.initConfig({
        pkg: require('./package.json'),
    });

    // Load task configs from `tasks/`
    grunt.loadTasks('./tasks/');

    // Build Task
    //
    // 1. Clean `dist/` folder
    //      - contrib-clean:    Deletes files from given folder
    // 2. Compile updated SCSS
    //      - spglue:           Compiles image sprites
    //      - sass:             Compiles our distributable CSS files
    //      - autoprefixer:     Ensures all files are properly prefixed
    // 3. Compile HTML templates into `dist/`
    //      - assemble:         Builds distributable HTML files
    // 4. Move asset files from `lib/` into `dist/`
    //      - contrib-copy:     Copies files from one folder to another
    grunt.registerTask('build',
        'Build site files.',
        [
            'clean:dist',
            'compile-css',
            'compile-html',
            'copy:dist',
        ]
    );

    // Code Verification Task
    //
    // 1. Verify code quality:
    //      - jshint:           Verifies JS Coding Standards
    //      - scss-lint:        Verifies SCSS Coding Standards
    //      - html-inspector:   Verifies HTML Coding Standards
    grunt.registerTask('verify',
        'Verify code quality.',
        [
            'jshint',
            'scsslint',
            'html-inspector',
        ]
    );

    // CSS Compile Task
    //
    // 1. spglue:               Compiles sprite files into SCSS source folder
    // 2. sass:                 Compiles all our distributable SCSS source into CSS
    // 3. autoprefixer          Runs compiled CSS through autoprefixer
    grunt.registerTask('compile-css',
        'Process and compile our CSS for distribution.',
        [
            //'spglue',
            'sass',
            'autoprefixer',
        ]
    );

    // HTML Compile Task
    //
    // 1. assemble
    //
    // TODO: Move Angular.JS partials into a HTML->JS compilation task.
    grunt.registerTask('compile-html',
        'Process and compile our HTML for distribution.',
        [
            'assemble',
        ]
    );

    // Development Server
    //
    // 1. build:                Our standard build task
    // 2. contrib-connect:      Launches a server
    // 3. watch:                Watches for file changes
    grunt.registerTask('serve',
        'Preprocess then serve the static site.',
        [
            'build',
            'connect',
            'watch'
        ]
    );

    // Default Grunt Task
    grunt.registerTask('default',
        'Default Grunt task.',
        [
            'serve'
        ]
    );
};
