module.exports = function(grunt) {
    grunt.config('imagemin', {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'dev/img/',
                src: ['**/*.{png,jpg,gif,svg}'],
                dest: 'build/img/'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
};
