'use strict';

var gulp        = require('gulp');
var webpack     = require('webpack-stream');
var runSequence = require('run-sequence');

module.exports = function (config) {
  gulp.task('build', ['clean'], function (cb) {
    runSequence(
      'copy-to-dev',
      'build-js',
      'build-css',
      'copy-to-dist',
      'build-vendor-js',
      'build-docs-app',
      cb);
  });
};
