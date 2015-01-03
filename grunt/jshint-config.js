module.exports = function(grunt) {
    grunt.config('jshint', {
        beforeconcat: ['dev/js/*.js', 'dev/js/app/*.js', 'dev/js/app/**/*.js']
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
};
