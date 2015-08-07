module.exports = function(grunt) {

    grunt.config('image_resize', {
        options: {
            format: 'png',
            gravity: 'Center',
            upscale: true
        },
        suppliers: {
            options: {
                height: 48,
                width: 100
            },
            src: 'lib/images/sprites/raw/supplier-logos/*.png',
            dest: 'lib/images/sprites/size-standard/supplier-logos/'
        },
        suppliers_lg: {
            options: {
                height: 96,
                width: 200
            },
            src: 'lib/images/sprites/raw/supplier-logos/*.png',
            dest: 'lib/images/sprites/size-large/supplier-logos/'
        },
        suppliers_sm: {
            options: {
                height: 26,
                width: 64
            },
            src: 'lib/images/sprites/raw/supplier-logos/*.png',
            dest: 'lib/images/sprites/size-small/supplier-logos/'
        },
        utilities: {
            options: {
                height: 48,
                width: 100
            },
            src: 'lib/images/sprites/raw/utility-logos/*.png',
            dest: 'lib/images/sprites/size-standard/utility-logos/'
        },
        utilities_lg: {
            options: {
                height: 96,
                width: 200
            },
            src: 'lib/images/sprites/raw/utility-logos/*.png',
            dest: 'lib/images/sprites/size-large/utility-logos/'
        },
        utilities_sm: {
            options: {
                height: 26,
                width: 64
            },
            src: 'lib/images/sprites/raw/utility-logos/*.png',
            dest: 'lib/images/sprites/size-small/utility-logos/'
        },
    });

    grunt.loadNpmTasks('grunt-image-resize');

};
