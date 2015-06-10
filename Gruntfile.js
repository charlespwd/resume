/*
 * y
 *
 * Licensed under MIT License
 */
module.exports = function (grunt) {
  'use strict';
  // Project configuration
  grunt.initConfig({
    latex: {
      pdf: {
        src: 'cv.tex',
        options: {
          engine: "xelatex",
          outputDirectory: 'dist/',
          jobname: 'cv'
        }
      }
    },
    connect: {
      server: {
        options: {
          hostname: 'localhost',
        }
      }
    },

    open: {
      pdf: {
        path: "dist/cv.pdf"
      }
    },

    watch: {
      latex: {
        files: ['**/*.tex', '**/*.cls'],
        tasks: ['latex', 'latex:pdf']
      },
      livereload: {
        options: {
          livereload: true
        },
        files: ['dist/y.pdf'],
      },
    }
  });

  // These plugins provide necessary tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-latex');
  grunt.loadNpmTasks('grunt-open');

  // Default task
  grunt.registerTask('default', ['connect', 'open:pdf', 'watch']);
};
