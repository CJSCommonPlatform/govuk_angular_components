'use strict';

var gulp        = require('gulp');
var $           = require('gulp-load-plugins')({ lazy: true });
var runSequence = require('run-sequence');

module.exports = function (config) {

  gulp.task('build-docs-app', function () {
    runSequence(
      ['copy-dist',
        'copy-app-npm-modules',
        'copy-app-html'],
      'concatenate-app-scripts',
      'minify-app-scripts'

    );
  });

  gulp.task('copy-dist', ['copy-dist-assets-to-docs-app', 'copy-dist-scripts-to-docs-app']);

  gulp.task('copy-dist-assets-to-docs-app', function () {
    return gulp.src([config.dist.assets + '/**/*'])
      .pipe(gulp.dest(config.docs.app.assets));
  });

  gulp.task('copy-dist-scripts-to-docs-app', function () {
    return gulp.src([config.dist.scripts + '/**/*'])
      .pipe(gulp.dest(config.docs.app.scripts));
  });

  gulp.task('copy-app-html', function () {
    return gulp.src([config.docs.src.root + '/**/*.html'])
      .pipe(gulp.dest(config.docs.app.root));
  });

  gulp.task('concatenate-app-scripts', function () {
    return gulp.src(config.docs.src.scripts + '/**/*')
      .pipe($.concat(config.angular.docsModuleName + '.js'))
      .pipe(gulp.dest(config.docs.app.scripts));
  });

  gulp.task('minify-app-scripts', function () {
    return gulp.src(config.docs.app.scripts + '/' + config.angular.docsModuleName + '.js')
      .pipe($.ngAnnotate())
      .pipe($.uglify())
      .pipe($.rename({extname: '.min.js'}))
      .pipe(gulp.dest(config.docs.app.scripts));
  });

  gulp.task('copy-app-npm-modules', function () {
    return gulp.src($.npmFiles(true, config.docs.src.packageJson), {base:'./'})
      .pipe(gulp.dest(config.docs.app.root));
  });
};
