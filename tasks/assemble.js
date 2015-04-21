module.exports = function(grunt) {

    grunt.config('assemble', {
        options: {
            flatten: true,
            partials: ['lib/templates/partials/*.html','lib/templates/partials/**/*.html'],
            layoutext: '.html',
            layoutdir: 'lib/templates/layouts',
            layout: 'default',
            data: ['lib/templates/data/*.json', 'lib/templates/data/**/*.json'],
        },
        pages: {
            src: ['lib/templates/pages/*.html'],
            dest: 'dist/'
        }
    });

    grunt.loadNpmTasks('assemble');

};
