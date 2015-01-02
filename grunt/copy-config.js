module.exports = function(grunt) {
    grunt.config('copy', {
        fonts: {
            expand: true,
            cwd: 'dev/font/',
            src: '**',
            dest: 'build/font'
        },
        images: {
            expand: true,
            cwd: 'dev/img/',
            src: '**',
            dest: 'build/img'
        },
        css: {
            expand: true,
            cwd: 'dev/css/',
            src: '*.css',
            dest: 'build/css'
        },
        html: {
            expand: true,
            cwd: 'dev/pages/',
            src: '*.html',
            dest: 'build'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};
