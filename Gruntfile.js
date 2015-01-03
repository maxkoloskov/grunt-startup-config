module.exports = function(grunt) {

    // Initialize config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });

    // Load task configs from separate files in grunt directory
    grunt.loadTasks('grunt');

    // Register tasks
    grunt.registerTask('copyAll', ['copy:fonts', 'copy:images', 'copy:html', 'copy:css']);

    grunt.registerTask('dev', ['connect:dev', 'watch']);
    grunt.registerTask('build', ['concat', 'uglify', 'sass', 'jade', 'copyAll', 'imagemin', 'autoprefixer', 'cssmin']);
    grunt.registerTask('prod', ['build', 'connect:prod:keepalive']);
    grunt.registerTask('default', ['dev']);
};