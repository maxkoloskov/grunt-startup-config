module.exports = function(grunt) {
    grunt.config('connect', {
        dev: {
            options: {
                hostname: 'localhost',
                port: 8000,
                base: 'build',
                open: true
            }
        },

        prod: {
            options: {
                keepalive: true,
                hostname: '*',
                port: 8000,
                base: 'build',
                open: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
};