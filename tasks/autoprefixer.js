module.exports = function(grunt) {

    grunt.config('autoprefixer', {
        dist: {
          options: {
            browsers: ['last 2 versions', '> 1%']
          },
          files: {
            './dist/css/styles.css' : './dist/css/styles.css'
          }
        }
      });

    grunt.loadNpmTasks('grunt-autoprefixer');

};
