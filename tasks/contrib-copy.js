module.exports = function(grunt) {

    grunt.config('copy', {
        dist: {
            files: [{
                expand: true,
                dot: true,
                cwd: 'lib/',
                dest: 'dist/trinity/',
                src: [
                    'fonts/**',
                    'images/**'
                ],
                filter: 'isFile'
            }]
        }
      });

    grunt.loadNpmTasks('grunt-contrib-copy');

};
