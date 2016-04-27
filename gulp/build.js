'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

module.exports = function () {
  gulp.task('build', ['clean'], function (cb) {
    runSequence(
      'copy-to-dev',
      'build-js',
      'build-css',
      'copy-to-dist',
      'build-docs-app',
      cb);
  });
};
