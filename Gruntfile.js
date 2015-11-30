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

    // Build Task
    // grunt.registerTask('build:devwp',
    //     'Build site files for DevWP.',
    //     [
    //         'clean:dist',
    //         'process-images:devwp',
    //         'compile-css:devwp',
    //         'compile-html',
    //         'copy:dist',
    //     ]
    // );

    // Build Task
    grunt.registerTask('build:dist',
        'Build site files for GH Pages.',
        [
            'clean:dist',
            'process-images:all',
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
    // grunt.registerTask('process-images:devwp',
    //     'Process and resize all of our images for DevWP.',
    //     [
    //         'clean:sprites',
    //         'copy:pathswp',
    //         'resize:all',
    //         'sprite:all:wp',
    //     ]
    // );

    // CSS Compile Task
    grunt.registerTask('compile-css:dev',
        'Process and compile our CSS for local development.',
        [
            'sass',
            'autoprefixer',
        ]
    );

    // CSS Compile Task
    grunt.registerTask('compile-css:devwp',
        'Process and compile our CSS for distribution to DevWP.',
        [
            'sass',
            'autoprefixer',
        ]
    );

    // CSS Compile Task
    grunt.registerTask('compile-css:dist',
        'Process and compile our CSS for distribution to GH Pages.',
        [
            'sass',
            'autoprefixer',
            'cssmin',
        ]
    );

    // Supplier/Utility Image Resizing Tasks
    grunt.registerTask('resize:all',
        'Process and resize all of our images.',
        [
            'image_resize:suppliers',
            'image_resize:suppliers_lg',
            'image_resize:suppliers_sm',
            'image_resize:utilities_electricity',
            'image_resize:utilities_electricity_lg',
            'image_resize:utilities_electricity_sm',
            'image_resize:utilities_natgas',
            'image_resize:utilities_natgas_lg',
            'image_resize:utilities_natgas_sm',
        ]
    );
    grunt.registerTask('resize:std',
        'Process and resize standard size images.',
        [
            'image_resize:suppliers',
            'image_resize:utilities_electricity',
            'image_resize:utilities_natgas',
        ]
    );
    grunt.registerTask('sprite:all',
        'Sprite all images (non-WordPress).',
        [
            'sprite:suppliers',
            'sprite:utilities_electricity',
            'sprite:utilities_natgas',
            'sprite:suppliers_sm',
            'sprite:utilities_electricity_sm',
            'sprite:utilities_natgas_sm',
            'sprite:suppliers_lg',
            'sprite:utilities_electricity_lg',
            'sprite:utilities_natgas_lg',
        ]
    );
    grunt.registerTask('sprite:all:wp',
        'Sprite all images (WordPress).',
        [
            'sprite:supplierswp',
            'sprite:utilities_electricity_wp',
            'sprite:utilities_natgas_wp',
            'sprite:supplierswp_sm',
            'sprite:utilities_electricity_wp_sm',
            'sprite:utilities_natgas_wp_sm',
            'sprite:supplierswp_lg',
            'sprite:utilities_electricity_wp_lg',
            'sprite:utilities_natgas_wp_lg',
        ]
    );
    grunt.registerTask('sprite:std',
        'Sprite standard size images (non-WordPress).',
        [
            'newer:sprite:suppliers',
            'newer:sprite:utilities_electricity',
            'newer:sprite:utilities_natgas',
        ]
    );
    grunt.registerTask('sprite:std:wp',
        'Sprite standard size images (WordPress).',
        [
            'newer:sprite:supplierswp',
            'newer:sprite:utilities_electricity_wp',
            'newer:sprite:utilities_natgas_wp',
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
