'use strict';

var gulp        = require('gulp');
var $           = require('gulp-load-plugins')({ lazy: true });
var runSequence = require('run-sequence');

module.exports = function (config) {

  gulp.task('build-js', function () {
    runSequence(
      'build-component-module',
      'build-component-templates',
      'concatenate-scripts',
      'minify-scripts'
    );
  });

  gulp.task('build-component-module', function () {
    return gulp.src(config.dev.scripts.components + '/**/*')
      .pipe($.angularModules(config.angular.moduleFile, {name: config.angular.moduleName}))
      .pipe(gulp.dest(config.dev.scripts.components));
  });

  gulp.task('build-component-templates', function () {
    return gulp.src(config.dev.scripts.templates + '/**/*')
      .pipe($.ngHtml2js({moduleName: config.angular.moduleName}))
      .pipe($.concat(config.angular.templateFile))
      .pipe(gulp.dest(config.dev.scripts.templates));
  });

  gulp.task('concatenate-scripts', function () {
    return gulp.src([
      config.dev.scripts.components + '/**/*.js',
      config.dev.scripts.templates + '/' + config.angular.templateFile
    ])
      .pipe($.concat(config.repositoryName + '.js'))
      .pipe(gulp.dest(config.dev.scripts.root));
  });

  gulp.task('minify-scripts', function () {
    return gulp.src(config.dev.scripts.root + '/' + config.repositoryName + '.js')
      .pipe($.ngAnnotate())
      .pipe($.uglify())
      .pipe($.rename({extname: '.min.js'}))
      .pipe(gulp.dest(config.dev.scripts.root));
  });

};
