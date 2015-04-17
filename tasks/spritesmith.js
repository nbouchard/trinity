
module.exports = function(grunt) {

    grunt.config('sprite', {
        suppliers: {
            src: 'lib/images/sprites/supplier-logos/*.png',
            dest: 'lib/images/supplier-logos.png',
            destCss: 'lib/styles/generated/_supplier-logos.scss',
            imgPath: '../images/supplier-logos.png',
            cssFormat: 'css',
            cssOpts: {
                cssSelector: function(sprite) {
                    return '.supplier-' + sprite.name;
                }
            }
        },
        utilities: {
            src: 'lib/images/sprites/utility-logos/*.png',
            dest: 'lib/images/utility-logos.png',
            destCss: 'lib/styles/generated/_utility-logos.scss',
            imgPath: '../images/utility-logos.png',
            cssFormat: 'css',
            cssOpts: {
                cssSelector: function(sprite) {
                    return '.utility-' + sprite.name;
                }
            }
        },
        supplierswp: {
            src: 'lib/images/sprites/supplier-logos/*.png',
            dest: 'lib/images/supplier-logos.png',
            destCss: 'lib/styles/generated/_supplier-logos.scss',
            imgPath: '/wp-content/themes/ChooseEnergyTheme/images/supplier-logos.png',
            cssFormat: 'css',
            cssOpts: {
                cssSelector: function(sprite) {
                    return '.supplier-' + sprite.name;
                }
            }
        },
        utilitieswp: {
            src: 'lib/images/sprites/utility-logos/*.png',
            dest: 'lib/images/utility-logos.png',
            destCss: 'lib/styles/generated/_utility-logos.scss',
            imgPath: '/wp-content/themes/ChooseEnergyTheme/images/utility-logos.png',
            cssFormat: 'css',
            cssOpts: {
                cssSelector: function(sprite) {
                    return '.utility-' + sprite.name;
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-spritesmith');

};
