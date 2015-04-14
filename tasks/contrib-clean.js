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
