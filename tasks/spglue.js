module.exports = function(grunt) {

    grunt.config('spglue', {
        dist: {
          files: {
            '/dist/': '/dist/'
          }
        },
    });

    grunt.loadNpmTasks('grunt-sprite-glue');

};




