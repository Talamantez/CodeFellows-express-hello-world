'use strict';

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-casper');


    grunt.initConfig({
        express: {
            options: {
                //Override defaults here
            },
            dev: {
                options: {
                    script: 'server.js'
                }
            },
            prod: {
                options: {
                    script: 'server.js',
                    node_env: 'production'
                }
            }
        },
        casper: {
            acceptance: {
                options: {
                    test: true,
                },
                files: {
                    'test/acceptance/casper-results.xml': ['test/acceptance/*_test.js']
                }
            }

        },

        autoprefixer: {
            dist: {
                files: {
                    'public/style.css': 'style.css'
                }
            }
        },
        watch: {
            styles: {
                files: ['style.css'],
                tasks: ['autoprefixer']
            }
        }

    });

    grunt.registerTask('server', ['jshint', 'express:dev']);
    grunt.registerTask('test', ['express:dev', 'casper']);
    grunt.registerTask('autoprefixer', ['autoprefixer']);
    grunt.registerTask('default', ['jshint', 'test']);

};
