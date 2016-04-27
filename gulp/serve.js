'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();

// watch files for changes and invokes respective tasks
module.exports = function (config) {
  gulp.task('serve', function () {
    browserSync.init({
      server: './',
      startPath: config.docs.app.root
    });

    //TODO add watchers

  });
};
