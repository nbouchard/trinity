module.exports = function(grunt) {

    grunt.config('sprite', {
        suppliers: {
            src: 'lib/images/sprites/size-standard/supplier-logos/*.png',
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
        suppliers_sm: {
            src: 'lib/images/sprites/size-small/supplier-logos/*.png',
            dest: 'lib/images/supplier-logos-sm.png',
            destCss: 'lib/styles/generated/_supplier-logos-sm.scss',
            imgPath: '../images/supplier-logos-sm.png',
            cssFormat: 'css',
            cssOpts: {
                cssSelector: function(sprite) {
                    return '.supplier-' + sprite.name + '-sm';
                }
            }
        },
        suppliers_lg: {
            src: 'lib/images/sprites/size-large/supplier-logos/*.png',
            dest: 'lib/images/supplier-logos-lg.png',
            destCss: 'lib/styles/generated/_supplier-logos-lg.scss',
            imgPath: '../images/supplier-logos-lg.png',
            cssFormat: 'css',
            cssOpts: {
                cssSelector: function(sprite) {
                    return '.supplier-' + sprite.name + '-lg';
                }
            }
        },
        utilities_electricity: {
            src: 'lib/images/sprites/size-standard/utility-logos/*.png',
            dest: 'lib/images/utility-logos.png',
            destCss: 'lib/styles/generated/_utility-logos-electricity.scss',
            imgPath: '../images/utility-logos.png',
            cssFormat: 'css',
            cssOpts: {
                cssSelector: function(sprite) {
                    return '.utility-' + sprite.name + '-electricity';
                }
            }
        },
        utilities_natgas: {
            src: 'lib/images/sprites/size-standard/utility-logos/*.png',
            dest: 'lib/images/utility-logos.png',
            destCss: 'lib/styles/generated/_utility-logos-natgas.scss',
            imgPath: '../images/utility-logos.png',
            cssFormat: 'css',
            cssOpts: {
                cssSelector: function(sprite) {
                    return '.utility-' + sprite.name + '-naturalgas';
                }
            }
        },
        utilities_electricity_sm: {
            src: 'lib/images/sprites/size-small/utility-logos/*.png',
            dest: 'lib/images/utility-logos-sm.png',
            destCss: 'lib/styles/generated/_utility-logos-electricity-sm.scss',
            imgPath: '../images/utility-logos-sm.png',
            cssFormat: 'css',
            cssOpts: {
                cssSelector: function(sprite) {
                    return '.utility-' + sprite.name + '-electricity-sm';
                }
            }
        },
        utilities_natgas_sm: {
            src: 'lib/images/sprites/size-small/utility-logos/*.png',
            dest: 'lib/images/utility-logos-sm.png',
            destCss: 'lib/styles/generated/_utility-logos-natgas-sm.scss',
            imgPath: '../images/utility-logos-sm.png',
            cssFormat: 'css',
            cssOpts: {
                cssSelector: function(sprite) {
                    return '.utility-' + sprite.name + '-naturalgas-sm';
                }
            }
        },
        utilities_electricity_lg: {
            src: 'lib/images/sprites/size-large/utility-logos/*.png',
            dest: 'lib/images/utility-logos-lg.png',
            destCss: 'lib/styles/generated/_utility-logos-electricity-lg.scss',
            imgPath: '../images/utility-logos-lg.png',
            cssFormat: 'css',
            cssOpts: {
                cssSelector: function(sprite) {
                    return '.utility-' + sprite.name + '-electricity-lg';
                }
            }
        },
        utilities_natgas_lg: {
            src: 'lib/images/sprites/size-large/utility-logos/*.png',
            dest: 'lib/images/utility-logos-lg.png',
            destCss: 'lib/styles/generated/_utility-logos-natgas-lg.scss',
            imgPath: '../images/utility-logos-lg.png',
            cssFormat: 'css',
            cssOpts: {
                cssSelector: function(sprite) {
                    return '.utility-' + sprite.name + '-naturalgas-lg';
                }
            }
        },
        supplierswp: {
            src: 'lib/images/sprites/size-standard/supplier-logos/*.png',
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
        supplierswp_sm: {
            src: 'lib/images/sprites/size-small/supplier-logos/*.png',
            dest: 'lib/images/supplier-logos-sm.png',
            destCss: 'lib/styles/generated/_supplier-logos-sm.scss',
            imgPath: '/wp-content/themes/ChooseEnergyTheme/images/supplier-logos-sm.png',
            cssFormat: 'css',
            cssOpts: {
                cssSelector: function(sprite) {
                    return '.supplier-' + sprite.name + '-sm';
                }
            }
        },
        supplierswp_lg: {
            src: 'lib/images/sprites/size-large/supplier-logos/*.png',
            dest: 'lib/images/supplier-logos-lg.png',
            destCss: 'lib/styles/generated/_supplier-logos-lg.scss',
            imgPath: '/wp-content/themes/ChooseEnergyTheme/images/supplier-logos-lg.png',
            cssFormat: 'css',
            cssOpts: {
                cssSelector: function(sprite) {
                    return '.supplier-' + sprite.name + '-lg';
                }
            }
        },
        utilities_electricity_wp: {
            src: 'lib/images/sprites/size-standard/utility-logos/*.png',
            dest: 'lib/images/utility-logos.png',
            destCss: 'lib/styles/generated/_utility-logos-electricity.scss',
            imgPath: '/wp-content/themes/ChooseEnergyTheme/images/utility-logos.png',
            cssFormat: 'css',
            cssOpts: {
                cssSelector: function(sprite) {
                    return '.utility-' + sprite.name + '-electricity';
                }
            }
        },
        utilities_natgas_wp: {
            src: 'lib/images/sprites/size-standard/utility-logos/*.png',
            dest: 'lib/images/utility-logos.png',
            destCss: 'lib/styles/generated/_utility-logos-natgas.scss',
            imgPath: '/wp-content/themes/ChooseEnergyTheme/images/utility-logos.png',
            cssFormat: 'css',
            cssOpts: {
                cssSelector: function(sprite) {
                    return '.utility-' + sprite.name + '-naturalgas';
                }
            }
        },
        utilities_electricity_wp_sm: {
            src: 'lib/images/sprites/size-small/utility-logos/*.png',
            dest: 'lib/images/utility-logos-sm.png',
            destCss: 'lib/styles/generated/_utility-logos-electricity-sm.scss',
            imgPath: '/wp-content/themes/ChooseEnergyTheme/images/utility-logos-sm.png',
            cssFormat: 'css',
            cssOpts: {
                cssSelector: function(sprite) {
                    return '.utility-' + sprite.name + '-electricity-sm';
                }
            }
        },
        utilities_natgas_wp_sm: {
            src: 'lib/images/sprites/size-small/utility-logos/*.png',
            dest: 'lib/images/utility-logos-sm.png',
            destCss: 'lib/styles/generated/_utility-logos-natgas-sm.scss',
            imgPath: '/wp-content/themes/ChooseEnergyTheme/images/utility-logos-sm.png',
            cssFormat: 'css',
            cssOpts: {
                cssSelector: function(sprite) {
                    return '.utility-' + sprite.name + '-naturalgas-sm';
                }
            }
        },
        utilities_electricity_wp_lg: {
            src: 'lib/images/sprites/size-large/utility-logos/*.png',
            dest: 'lib/images/utility-logos-lg.png',
            destCss: 'lib/styles/generated/_utility-logos-electricity-lg.scss',
            imgPath: '/wp-content/themes/ChooseEnergyTheme/images/utility-logos-lg.png',
            cssFormat: 'css',
            cssOpts: {
                cssSelector: function(sprite) {
                    return '.utility-' + sprite.name + '-electricity-lg';
                }
            }
        },
        utilities_natgas_wp_lg: {
            src: 'lib/images/sprites/size-large/utility-logos/*.png',
            dest: 'lib/images/utility-logos-lg.png',
            destCss: 'lib/styles/generated/_utility-logos-natgas-lg.scss',
            imgPath: '/wp-content/themes/ChooseEnergyTheme/images/utility-logos-lg.png',
            cssFormat: 'css',
            cssOpts: {
                cssSelector: function(sprite) {
                    return '.utility-' + sprite.name + '-naturalgas-lg';
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-spritesmith');

};
