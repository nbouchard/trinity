module.exports = function(grunt) {

    grunt.config('copy', {
        paths: {
            src: 'lib/styles/base/paths/_paths.scss',
            dest: 'lib/styles/generated/_paths.scss',
        },
        pathswp: {
            src: 'lib/styles/base/paths/_paths-wp.scss',
            dest: 'lib/styles/generated/_paths.scss',
        },
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
