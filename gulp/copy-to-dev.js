'use strict';

var gulp = require('gulp');
var $    = require('gulp-load-plugins')({ lazy: true });

module.exports = function (config) {

  gulp.task('copy-to-dev', [
    'copy-govuk-bootstrap',
    'copy-component-scripts',
    'copy-component-templates',
    'copy-component-styles']);


  gulp.task('copy-govuk-bootstrap', function () {
    return gulp.src(config.nodeModules.govUkBootstrap + '/**/*')
      .pipe(gulp.dest(config.dev.root));
  });

  gulp.task('copy-component-scripts', function () {
    return gulp.src([config.src.components + '/**/*.js', "!" + config.src.components + '/**/*.spec.js'])
      .pipe(gulp.dest(config.dev.scripts.components));
  });

  gulp.task('copy-component-templates', function () {
    return gulp.src([config.src.components + '/**/*.html'])
      .pipe(gulp.dest(config.dev.scripts.templates));
  });

  gulp.task('copy-component-styles', function () {
    return gulp.src([config.src.components + '/**/*.scss'])
      .pipe($.flatten())
      .pipe(gulp.dest(config.dev.sass.components));
  });

};
