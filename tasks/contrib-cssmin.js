module.exports = function(grunt) {

    grunt.config('cssmin', {
        options: {
            shorthandCompacting: false,
            sourceMap: true
        },
        target: {
            files: [{
                expand: true,
                cwd: 'dist/css',
                src: ['*.css'],
                dest: 'dist/css',
                ext: '.css'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');

};




