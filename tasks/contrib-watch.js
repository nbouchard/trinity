module.exports = function(grunt) {

    grunt.config('watch', {
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                files: [
                    'dist/*.html',
                    'dist/js/*.{js,json}',
                    'dist/js/**/*.{js,json}',
                    'dist/css/*.css',
                    'dist/data/*.{js,json}',
                    'dist/fonts/*.{eot,otf,svg,ttf,woff,woff2}',
                    'dist/images/**/*.{png,jpg,jpeg,gif,webp,svg}',
                    'dist/partials/*.html',
                    'dist/partials/**/*.html'
                ],
                options: {
                    livereload: true
                }
            },
            templates: {
                files: ['lib/templates/*.html','lib/templates/**/*.html'],
                tasks: ['assemble:pages']
            },
            sass: {
                files: ['lib/styles/*.scss','lib/styles/**/*.scss'],
                tasks: ['sass:dist']
            },
            scripts: {
                files: [
                    'lib/js/*.{js,json}',
                    'lib/js/**/*.{js,json}',
                    'lib/data/*.{js,json}'
                ],
                tasks: ['clean:scripts', 'copy:scripts']
            }
        });

    grunt.loadNpmTasks('grunt-contrib-watch');

};



