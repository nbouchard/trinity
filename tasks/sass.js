module.exports = function(grunt) {

    grunt.config('sass', {
            options: {
                sourceMap: true,
                outputStyle: 'compressed'
            },
            dist: {
                files: {
                    'dist/css/styles.css': 'lib/styles/styles.scss'
                }
            }
        });

    grunt.loadNpmTasks('grunt-sass');

};
