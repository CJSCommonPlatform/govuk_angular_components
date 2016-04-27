'use strict';

var gulp = require('gulp');

module.exports = function (config) {

  gulp.task('copy-to-dist', ['copy-assets-to-dist', 'copy-scripts-to-dist', 'copy-sass-to-dist'], function () {
  });

  gulp.task('copy-assets-to-dist', function () {
    return gulp.src(config.dev.assets.root + '/**/*')
      .pipe(gulp.dest(config.dist.assets));
  });

  gulp.task('copy-scripts-to-dist', function () {
    return gulp.src(config.dev.scripts.root + '/*.js')
      .pipe(gulp.dest(config.dist.scripts));
  });

  gulp.task('copy-sass-to-dist', function () {
    return gulp.src(config.dev.sass.root + '/**/*')
      .pipe(gulp.dest(config.dist.sass));
  });
};
