module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
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
			output: ['./dist/*', './min/']
		},
		uglify: {
			development: {
				files: [
					{
						expand: true,
						cwd: '.',
						src: 'dist/built.js',
						dest: 'min/'
					}
				]
			},
			options: {
				compress: true,
				mangle: true
			}
		},
		babel: {
			options: {
				sourceMap: true,
				presets: ['env']
			},
			dist: {
				files: [
					{
						expand: true, // Enable dynamic expansion.
						// cwd: ['src'],      // Src matches are relative to this path.
						src: 'dist/built.js',
						dest: './' // Destination path prefix.
						// ext: '.js',   // Dest filepaths will have this extension.
						// extDot: 'last'   // Extensions in filenames begin after the last dot
					}
				]
			}
		},
		ngAnnotate: {
			options: {
				singleQuotes: true
			},
			app: {
				files: [
					{
						expand: true, // Enable dynamic expansion.
						// cwd: ['src'],      // Src matches are relative to this path.
						src: 'dist/built.js',
						dest: './' // Destination path prefix.
						// ext: '.js',   // Dest filepaths will have this extension.
						// extDot: 'last'   // Extensions in filenames begin after the last dot
					}
				]
			}
		},
		concat: {
			dist: {
				src: [
					'src/scripts/app.js',
					'src/scripts/controllers/main.js',
					'src/scripts/Services/treeDataService.js',
					'src/scripts/Services/RapportDataService.js',
					'src/scripts/Services/dutchOUTree.js',
					'src/scripts/Services/ClientRepostitory.js',
					'src/scripts/Services/initializationService.js',
					'src/App/ManageOU/ManageOU.js',
					'src/App/GenReport/GenReportController.js',
					'src/scripts/Services/ClientRepostitory.js',
					'src/scripts/Factory/client.js',
					'src/scripts/Factory/observableClient.js',
					'src/views/Shared/showNodeChildren.directive.js',
					'src/views/Shared/RapportOverviewUser/RapportViewUser.directive.js',
					'src/views/Shared/RapportOverviewUser/RapportViewUser.controller.js',
					'src/views/Shared/RapportOverviewClient/RapportViewClient.directive.js',
					'src/views/Shared/RapportOverviewClient/RapportViewClient.controller.js',
					'src/views/Shared/Spinner/Spinner.controller.js',
					'src/views/Shared/Spinner/Spinner.directive.js',
					'src/views/Shared/AddButton/AddButton.directive.js',
					'src/views/Shared/AddButton/AddButton.controller.js',
					'src/views/Shared/RapportOverviewAddClient/RapportViewAddClient.controller.js',
					'src/views/Shared/RapportOverviewAddClient/RapportViewAddClient.directive.js',
					'src/views/Shared/LastEditedClientNotifier/lastEditedClientNotifier.controller.js',
					'src/views/Shared/LastEditedClientNotifier/lastEditedClientNotifier.directive.js',
					'src/views/Shared/NewsItem/newsItem.controller.js',
					'src/views/Shared/NewsItem/newsItem.directive.js',
				],
				dest: 'dist/built.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['clean', 'concat', 'ngAnnotate', 'babel', 'uglify']);
};
