'use strict';

var gulp          = require('gulp');
var webpack       = require('webpack');
var webpackStream = require('webpack-stream');
var $             = require('gulp-load-plugins')({ lazy: true });

module.exports = function (config) {
  gulp.task('build-vendor-js', [], function () {
    
    return gulp.src(config.src.vendor + "/*.js")
      .pipe(webpackStream({
        resolve: {
          alias: {
            angular: "angular/angular.min.js",
            jquery: "jquery/dist/jquery.min.js"
          }
        },
        output: {
          filename: 'vendor.js'
        },
        module: {
          loaders: [
            { test: /jquery/, loader: 'expose?$!expose?jQuery' }
          ]
        }
      }))
      .pipe(gulp.dest(config.dev.vendor));
  });
};
