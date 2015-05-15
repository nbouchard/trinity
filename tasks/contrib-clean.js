module.exports = function(grunt) {

    grunt.config('clean', {
        scripts: {
            src: [
                'dist/js/*',
                'dist/data/*'
            ]
        },
        sprites: {
            src: [
                'lib/styles/generated/*',
                'lib/images/supplier-logos.png',
                'lib/images/utility-logos.png',
                'dist/images/supplier-logos.png',
                'dist/images/utility-logos.png',
                'lib/images/sprites/size-standard/supplier-logos/*',
                'lib/images/sprites/size-standard/utility-logos/*',
                'lib/images/sprites/size-small/supplier-logos/*',
                'lib/images/sprites/size-small/utility-logos/*',
                'lib/images/sprites/size-large/supplier-logos/*',
                'lib/images/sprites/size-large/utility-logos/*',
            ]
        },
        dist: {
            src: [
                'dist/*'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');

};
