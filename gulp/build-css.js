'use strict';

var gulp   = require('gulp');
var $      = require('gulp-load-plugins')({ lazy: true });
module.exports = function (config) {

  gulp.task('build-css', ['create-component-sass', 'remove-govuk-bootstrap-stylesheet'],function () {
    return gulp.src(config.dev.sass.root + '/' + config.repositoryName + '.scss')
      .pipe($.sass())
      .pipe(gulp.dest(config.dev.assets.root));
  });

  gulp.task('create-component-sass',function () {
    return gulp.src([config.dev.sass.root + '/govuk_bootstrap.scss', config.dev.sass.components + '/**/*.scss'])
      .pipe($.styleImport({fileName: config.repositoryName + '.scss', cwd: config.dev.sass.root}))
      .pipe(gulp.dest(config.dev.sass.root));
  });

  gulp.task('remove-govuk-bootstrap-stylesheet',function () {
    return gulp.src(config.dev.assets.govUkBootstrapStylesheet, {read: false})
      .pipe($.clean());
  });

};
