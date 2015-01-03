module.exports = function(grunt) {
    grunt.config('sass', {
        dist: {
            options: {
                style: 'expanded'
            },
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