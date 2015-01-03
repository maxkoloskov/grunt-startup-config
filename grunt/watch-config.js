module.exports = function(grunt) {
    grunt.config('watch', {
        options: {
            livereload: true
        },
        scripts: {
            files: ['dev/js/*.js'],
            tasks: ['jshint', 'concat', 'uglify'],
            options: {
                spawn: false
            }
        },
//        jshint: {
//            files: ['dev/js/*.js', 'dev/js/app/*.js', 'dev/js/app/**/*.js'],
//            task: ['jshint'],
//            options: {
//                spawn: false
//            }
//        },
        sass: {
            files: ['dev/sass/**/*.scss', 'dev/sass/*.scss'],
            tasks: ['sass', 'autoprefixer', 'cssmin'],
            options: {
                spawn: false
            }
        },
        images: {
            files: ['dev/img/**/*.{png,jpg,gif}', 'dev/img/*.{png,jpg,gif}'],
            tasks: ['imagemin'],
            options: {
                spawn: false
            }
        },
        jade: {
            files: ['dev/pages/**/*.jade', 'dev/pages/*.jade'],
            tasks: ['jade'],
            options: {
                spawn: false
            }
        },
        html: {
            files: ['dev/pages/**/*.html', 'dev/pages/*.html'],
            tasks: ['copy:html'],
            options: {
                spawn: false
            }
        },
        css: {
            files: ['dev/sass/**/*.css', 'dev/sass/*.css'],
            tasks: ['copy:css'],
            options: {
                spawn: false
            }
        },
        font: {
            files: ['dev/font/*'],
            tasks: ['copy:fonts'],
            options: {
                spawn: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};
