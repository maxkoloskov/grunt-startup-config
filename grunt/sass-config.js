module.exports = function(grunt) {
    grunt.config('sass', {
        dist: {
            files: [{
                expand: true,
                cwd: 'dev/sass',
                src: ['*.scss'],
                dest: 'build/css',
                ext: '.css'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
};