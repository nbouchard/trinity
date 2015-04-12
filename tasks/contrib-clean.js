module.exports = function(grunt) {

    grunt.config('clean', {
        scripts: {
            src: [
                'dist/js/*',
                'dist/data/*'
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
