module.exports = function(grunt) {

    grunt.config('postcss', {
        options: {
    	    map: true,
    	    processors: [
    	        require('autoprefixer')({
        		    browsers: ['last 2 versions', '> 1%']
    	        })
    	    ]
        },
        dist: {
    	    src: 'dist/css/*.css'
        }
    });

    grunt.loadNpmTasks('grunt-postcss');

};
