module.exports = function(grunt) {

    grunt.config('cssmin', {
      target: {
        files: [{
          expand: true,
          cwd: 'dist/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css',
          ext: '.min.css'
        }]
      }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');

};




