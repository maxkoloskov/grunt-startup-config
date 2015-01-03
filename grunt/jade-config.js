module.exports = function(grunt) {
    grunt.config('jade', {
        compile: {
            options: {
                pretty: true
            },
            files: [{
                cwd: 'dev/pages/',
                src: ['*.jade'],
                dest: 'build/',
                expand: true,
                ext: '.html'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jade');
};

