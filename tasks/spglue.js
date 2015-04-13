module.exports = function(grunt) {

    grunt.config('spglue', {
        options: {
            project: true,
            scss: true,
            namespace: 'ce'
        },
        devwp: {
            option: {
                spriteNamespace: 'logo',
                url: '/wp-content/ChooseEnergyTheme/images'
            },
            files: {
                'lib/styles/generated': 'lib/images/sprites'
            }
        },
        dist: {
            option: {
                spriteNamespace: 'logo',
                url: '../images'
            },
            files: {
                'lib/styles/generated': 'lib/images/sprites'
            }
        }
    });

    grunt.loadNpmTasks('grunt-sprite-glue');

};
