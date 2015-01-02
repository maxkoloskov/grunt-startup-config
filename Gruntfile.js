module.exports = function(grunt) {

    // Initialize config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });

    // Load task configs from separate files in grunt directory
    grunt.loadTasks('grunt');

    // Register tasks
    grunt.registerTask('dev', []);
    grunt.registerTask('build', []);
};