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

    // Load Grunt Newer for selective task running
    grunt.loadNpmTasks('grunt-newer');

    // Build Task
    grunt.registerTask('build:dev',
        'Build site files for local dev.',
        [
            'clean:dist',
            'clean:sprites',
            'compile-css:dev',
            'compile-html',
            'copy:dist',
        ]
    );

    // Build Task
    grunt.registerTask('build:devwp',
        'Build site files for DevWP.',
        [
            'clean:dist',
            'clean:sprites',
            'compile-css:devwp',
            'compile-html',
            'copy:dist',
        ]
    );

    // Build Task
    grunt.registerTask('build:dist',
        'Build site files for GH Pages.',
        [
            'clean:dist',
            'clean:sprites',
            'compile-css:dist',
            'compile-html',
            'copy:dist',
        ]
    );

    // Code Verification Task
    // Note: This is a slow task.
    grunt.registerTask('verify',
        'Verify code quality.',
        [
            'jshint',
            'scsslint',
            'html-inspector',
        ]
    );

    // CSS Compile Task
    grunt.registerTask('compile-css:dev',
        'Process and compile our CSS for local development.',
        [
            'resize-std',
            'newer:sprite:suppliers',
            'newer:sprite:utilities',
            'sass',
            'autoprefixer',
        ]
    );

    // CSS Compile Task
    grunt.registerTask('compile-css:devwp',
        'Process and compile our CSS for distribution to DevWP.',
        [
            'resize-std',
            'newer:sprite:supplierswp',
            'newer:sprite:utilitieswp',
            'sass',
            'autoprefixer',
        ]
    );

    // CSS Compile Task
    grunt.registerTask('compile-css:dist',
        'Process and compile our CSS for distribution to GH Pages.',
        [
            'resize-std',
            'newer:sprite:suppliers',
            'newer:sprite:utilities',
            'sass',
            'autoprefixer',
            'cssmin',
        ]
    );

    // Supplier/Utility Image Resizing Tasks
    grunt.registerTask('resize-all',
        'Process and resize all of our images.',
        [
            'image_resize',
        ]
    );
    grunt.registerTask('resize-std',
        'Process and resize all of our images.',
        [
            'image_resize:suppliers',
            'image_resize:utilities',
        ]
    );

    // HTML Compile Task
    // TODO: Move Angular.JS partials into a HTML->JS compilation task.
    grunt.registerTask('compile-html',
        'Process and compile our HTML for distribution.',
        [
            'assemble',
        ]
    );

    // Development Server
    grunt.registerTask('serve',
        'Preprocess then serve the static site.',
        [
            'build:dev',
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
