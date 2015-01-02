module.exports = function(grunt) {
    grunt.config('uglify', {
        build: {
            src: 'build/js/main.js',
            dest: 'build/js/main.min.js'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
};