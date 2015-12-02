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
            'process-images:all',
            'compile-css:dev',
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

    // Image Processing
    grunt.registerTask('process-images:all',
        'Process and resize all of our images.',
        [
            'clean:sprites',
            'copy:paths',
            'resize:all',
            'sprite:all',
        ]
    );

    // CSS Compile Task
    grunt.registerTask('compile-css:dev',
        'Process and compile our CSS for local development.',
        [
            'sass',
            'autoprefixer',
        ]
    );

    // Supplier/Utility Image Resizing Tasks
    grunt.registerTask('resize:all',
        'Process and resize all of our images.',
        [
            'image_resize:suppliers',
            'image_resize:suppliers_lg',
            'image_resize:suppliers_sm',
            'image_resize:utilities',
            'image_resize:utilities_lg',
            'image_resize:utilities_sm',
        ]
    );
    grunt.registerTask('resize:std',
        'Process and resize standard size images.',
        [
            'image_resize:suppliers',
            'image_resize:utilities',
        ]
    );
    grunt.registerTask('sprite:all',
        'Sprite all images (non-WordPress).',
        [
            'newer:sprite:suppliers',
            'newer:sprite:utilities',
            'newer:sprite:suppliers_sm',
            'newer:sprite:utilities_sm',
            'newer:sprite:suppliers_lg',
            'newer:sprite:utilities_lg',
        ]
    );
    grunt.registerTask('sprite:all:wp',
        'Sprite all images (WordPress).',
        [
            'newer:sprite:supplierswp',
            'newer:sprite:utilitieswp',
            'newer:sprite:supplierswp_sm',
            'newer:sprite:utilitieswp_sm',
            'newer:sprite:supplierswp_lg',
            'newer:sprite:utilitieswp_lg',
        ]
    );
    grunt.registerTask('sprite:std',
        'Sprite standard size images (non-WordPress).',
        [
            'newer:sprite:suppliers',
            'newer:sprite:utilities',
        ]
    );
    grunt.registerTask('sprite:std:wp',
        'Sprite standard size images (WordPress).',
        [
            'newer:sprite:supplierswp',
            'newer:sprite:utilitieswp',
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
