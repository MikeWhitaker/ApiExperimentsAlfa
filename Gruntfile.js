module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    watch: {
      files: ["./app.js", "./src/**/*.js"],
      tasks: ['stop_node']
    },
	run_node: {
        start: {
			options: {
            },
            files: { src: ['app.js'] }
        }
    },
    stop_node: {
        stop: {}
    }
  });

  grunt.registerTask("server", "Start a custom web server", function() {
    require("./app.js");
  });

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.registerTask("default", ["run_node", "watch"]);
};
