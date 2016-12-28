module.exports = function(grunt) {

    grunt.config('sass', {
            options: {
                sourceMap: true,
                outputStyle: 'compressed'
            },
            dist: {
                files: {
                    'dist/trinity/css/styles.css': 'lib/styles/styles.scss',
                    'dist/trinity/css/globals.css': 'lib/styles/globals.scss'
                }
            }
        });

    grunt.loadNpmTasks('grunt-sass');

};
