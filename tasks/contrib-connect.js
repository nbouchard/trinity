module.exports = function(grunt) {

    grunt.config('connect', {
            options: {
                port: grunt.option('port') || 5585,
                hostname: 'localhost',
                livereload: grunt.option('lrport') || 35729
            },
            livereload: {
                options: {
                    open: true,
                    base: 'dist'
                }
            }
        });

    grunt.loadNpmTasks('grunt-contrib-connect');

};



