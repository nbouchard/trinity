module.exports = function(grunt) {

    grunt.config('assemble', {
        options: {
            flatten: true,
            partials: ['lib/templates/partials/*.html','lib/templates/partials/**/*.html'],
            layoutext: '.html',
            layoutdir: 'lib/templates/layouts/',
            layout: 'default',
            data: ['lib/templates/data/*.json','lib/templates/data/**/*.json'],
            stylesdir: 'dist/css/',
        },
        pages: {
            files: [
                {
                    expand: true,
                    cwd: 'lib/templates/pages/',
                    src: ['*.html','**/*.html'],
                    dest: 'dist/',
                }
            ]
        }
    });

    grunt.loadNpmTasks('assemble');

};