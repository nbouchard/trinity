module.exports = function(grunt) {

    grunt.config('gh-pages', {
            options: {
              base: 'dist'
            },
            src: '**/*'
        });

    grunt.loadNpmTasks('grunt-gh-pages');

};



