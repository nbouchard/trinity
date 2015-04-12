module.exports = function(grunt) {

    grunt.config('htmlmin', {
        dist: {
          options: {
            removeComments: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
            preserveLineBreaks: true,
            caseSensitive: true
          },
          files: {
            'dist/*.html': 'dist/*.html'
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');

};
