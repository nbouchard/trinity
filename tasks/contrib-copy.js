module.exports = function(grunt) {

    grunt.config('copy', {
        scripts: {
            files: [{
                expand: true,
                dot: true,
                cwd: 'lib/',
                dest: 'dist/',
                src: [
                    'data/**',
                    'js/**',
                ],
                filter: 'isFile'
            }]
        },
        dist: {
            files: [{
                expand: true,
                dot: true,
                cwd: 'lib/',
                dest: 'dist/',
                src: [
                    'data/**',
                    'fonts/**',
                    'images/**',
                    'js/**',
                    'partials/**',
                    'videos/**',
                ],
                filter: 'isFile'
            }]
        }
      });

    grunt.loadNpmTasks('grunt-contrib-copy');

};
