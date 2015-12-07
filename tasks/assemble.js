module.exports = function(grunt) {

    // grunt.config('assemble', {
    //     options: {
    //         flatten: true,
    //         partials: ['lib/templates/partials/*.html','lib/templates/partials/**/*.html'],
    //         layoutext: '.html',
    //         layoutdir: 'lib/templates/layouts',
    //         layout: 'default',
    //         data: ['lib/templates/data/*.json', 'lib/templates/data/**/*.json'],
    //     },
    //     pages: {
    //         src: ['lib/templates/pages/*.html'],
    //         dest: 'dist/'
    //     }
    // });

    // grunt.loadNpmTasks('assemble');


    grunt.config('assemble', {
        options: {
            flatten: true,
            // expand: true,
            partials: ['lib/templates/partials/*.html','lib/templates/partials/**/*.html'],
            layoutext: '.html',
            layoutdir: 'lib/templates/layouts/',
            layout: 'default',
            data: ['lib/templates/data/*.json','lib/templates/data/**/*.json'],
            stylesdir: 'dist/css/'
        },
        pages: {
            // src: ['lib/templates/*.html'],{,*/}*
            // src: ['lib/templates/pages/*.html','lib/templates/pages/**/*.html'],
            // dest: 'dist/'
            // options: {

            // },
            files: [
                {
                    expand: true,
                    cwd: 'lib/templates/pages/',
                    src: ['*.html','**/*.html'],
                    dest: 'dist/',
                    // ext: '.html'
                }
            ]
        }
    });

    grunt.loadNpmTasks('assemble');

};
