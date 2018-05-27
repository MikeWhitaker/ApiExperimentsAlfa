module.exports = function(grunt) {

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      jshint: {
        files: ['Gruntfile.js', './src/**/*.js', 'app.js'],
        options: {
          globals: {
            jQuery: true
          }
        }
      },
      watch: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      },
      clean: {
        output: ['dist/*']
      },
      uglify: {
        development: {
          files: [{
            expand: true,
            cwd: './src/',
            src: '**/*.js',
            dest: './dist/'
          }]
        },
        options: {
          compress: true,
          mangle: true
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', ['clean', 'uglify']);
  
  };