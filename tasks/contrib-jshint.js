module.exports = function(grunt) {

  grunt.config('jshint', {
    config: {
      options: {jshintrc: '.jshintrc'},
      src: ['Gruntfile.js', 'dist/js/*.js', 'dist/js/**/*.js', '!dist/js/vendors/**/*.js'],
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

};
