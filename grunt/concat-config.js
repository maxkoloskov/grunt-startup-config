module.exports = function(grunt) {
    grunt.config('concat', {
        dist: {
            src: ['dev/js/*.js', 'dev/js/3dparty/*.js', 'dev/js/app/*.js'],
            dest: 'build/js/main.js'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
};