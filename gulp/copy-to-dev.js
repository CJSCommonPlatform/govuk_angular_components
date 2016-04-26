'use strict';

var gulp = require('gulp');

module.exports = function (config) {

  gulp.task('copy-to-dev', [
    'copy-govuk-bootstrap',
    'copy-component-scripts',
    'copy-component-templates']);


  gulp.task('copy-govuk-bootstrap', function () {
    return gulp.src(config.nodeModules.govUkBootstrap + '/**/*')
      .pipe(gulp.dest(config.dev.govUkBootstrap));
  });

  gulp.task('copy-component-scripts', function () {
    return gulp.src([config.src.components + '/**/*.js', "!" + config.src.components + '/**/*.spec.js'])
      .pipe(gulp.dest(config.dev.scripts));
  });

  gulp.task('copy-component-templates', function () {
    return gulp.src([config.src.components + '/**/*.html'])
      .pipe(gulp.dest(config.dev.templates));
  });

};
