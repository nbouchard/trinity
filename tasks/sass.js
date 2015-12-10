module.exports = function(grunt) {

    grunt.config('sass', {
            options: {
                sourceMap: true,
                outputStyle: 'compressed'
            },
            dist: {
                files: {
                    'dist/css/styles.css': 'lib/styles/styles.scss',
                    'dist/css/globals.css': 'lib/styles/globals.scss'
                }
            }
        });

    grunt.loadNpmTasks('grunt-sass');

};
