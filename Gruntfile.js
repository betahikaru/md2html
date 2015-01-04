// 'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    md2html: {
        multiple_files: {
          options: {
            layout: "md2html/layout.html",
            markedOptions: {
              gfm: false
            }
          },
          files: [{
            expand: true,
            cwd: 'markdown',
            src: ['*.md'],
            dest: 'html',
            ext: '.html'
          }]
        }
      }
  });
  grunt.loadNpmTasks('grunt-md2html');
  grunt.registerTask('default', 'md2html');
};
