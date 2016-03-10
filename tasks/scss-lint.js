module.exports = function(grunt) {

    grunt.config('scsslint', {
        allFiles: [
          'lib/styles/**/*.scss',
          '!lib/styles/mixins/vendors/**/*.scss',
          '!lib/styles/vendors/**/*.scss',
          '!lib/styles/generated/**/*.scss'
        ],
        options: {
          config: '.scss-lint.yml',
          reporterOutput: null,
          colorizeOutput: true,
          force: true,
          maxBuffer: 100000
        }
    });

    grunt.loadNpmTasks('grunt-scss-lint');

};
