module.exports = function(grunt) {

    grunt.config('html-inspector', {
        options: {
            parameters: 'noglobals=true'
        },
        all: {
            src: ['dist/*.html']
        }
    });

    grunt.loadNpmTasks('grunt-html-inspector');

};
