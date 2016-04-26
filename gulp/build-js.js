'use strict';

var gulp = require('gulp');
var $    = require('gulp-load-plugins')({ lazy: true });

module.exports = function (config) {

  gulp.task('build-js', [
    'create-component-module',
    'build-component-templates']);


  gulp.task('create-component-module', function () {
    return gulp.src(config.dev.scripts + '/**/*')
      .pipe($.angularModules(config.angular.moduleFile, {name: config.angular.moduleName}))
      .pipe(gulp.dest(config.dev.scripts));
  });

  gulp.task('build-component-templates', function () {
    return gulp.src(config.dev.templates + '/**/*')
      .pipe($.ngHtml2js({moduleName: config.angular.moduleName}))
      .pipe($.concat(config.angular.templateFile))
      .pipe(gulp.dest(config.dev.templates));
  });

};
