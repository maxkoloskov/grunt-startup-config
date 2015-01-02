module.exports = function(grunt) {
    grunt.config('autoprefixer', {
        multiple_files: {
            expand: true,
            flatten: true,
            src: 'build/css/*.css',
            dest: 'build/css/'
        }
    });

    grunt.loadNpmTasks('grunt-autoprefixer');
};