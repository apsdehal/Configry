module.exports = function ( grunt ) {
	// Load all grunt tasks
	grunt.loadNpmTasks("grunt-karma");	
	grunt.loadNpmTasks("grunt-browserify");	
	grunt.loadNpmTasks("grunt-contrib-uglify");	
	grunt.loadNpmTasks("grunt-contrib-jasmine");	
	// init the grunt config
	grunt.initConfig({
	    // Browserify the modules
		browserify : {
			configry : {
				src : "src/configry.js",
				dest : "build/configry.js" 
			},
			tests : {
				src : "tests/configry_test.js",
				dest : "build/configry_test.js"
			}
		},

		// Add tasks for unit tests
		karma : {
			unit : {
				configFile : "karma.config.js"
			}
		}
	});

	// Define dev environment tasks
	grunt.registerTask('default',['browserify', 'karma:unit']);
	// Define production environment tasks
	grunt.registerTask('production', ['env:prod', 'browserify:configry']);
};