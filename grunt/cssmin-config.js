module.exports = function(grunt) {
    grunt.config('cssmin', {
        target: {
            files: [{
                expand: true,
                cwd: 'build/css',
                src: ['*.css', '!*.min.css'],
                dest: 'build/css',
                ext: '.min.css'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
};
