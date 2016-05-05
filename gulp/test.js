'use strict';

var gulp = require('gulp'),
  $ = require('gulp-load-plugins')({lazy: true});

module.exports = function (config, log) {
  gulp.task('test', function (done) {

    $.clean(config.coverage);

    startTests(true /*singleRun mode*/, done);
  });

  gulp.task('autotest', function (done) {
    startTests(false /*continuous testing mode*/, done);
  });

  function startTests(singleRun, done) {

    var karma = require('karma').server;

    karma.start({
      configFile: config.karma.configFile,
      singleRun: !!singleRun
    }, karmaCompleted);

    function karmaCompleted(karmaResult) {
      log('Karma completed!');

      if (karmaResult === 1) {
        // passing a string into a callback in func in gulp signifies an error
        done('karma: tests failed with code ' + karmaResult);
      }
      else {
        done();
      }
    }
  }
};
