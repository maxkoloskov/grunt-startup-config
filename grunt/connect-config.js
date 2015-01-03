module.exports = function(grunt) {
    grunt.config('connect', {
        options: {
            hostname: '*',
            port: 8000,
            base: 'build/',
            open: true
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
};