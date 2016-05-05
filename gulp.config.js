/*global require, module*/

(function () {
  'use strict';

  module.exports = function () {
    var config= {
      coverage: './coverage',
      reports: './reports',
      src: {
        root: './src',
        components: './src/components',
        vendor: './src/vendor'
      },
      dev: {
        root: './dev',
        sass: {
          root: './dev/sass',
          components: './dev/sass/components'
        },
        assets: {
          root: './dev/assets',
          govUkBootstrapStylesheet: './dev/assets/govuk_bootstrap.css'
        },
        scripts: {
          root: './dev/scripts',
          components: './dev/scripts/components',
          templates: './dev/scripts/templates'
        },
        vendor: './dev/vendor'
      },
      docs: {
        root: './docs',
        src: {
          root: './docs/src',
          scripts: './docs/src/scripts',
          packageJson: './docs/src/package.json'
        },
        app: {
          root: './docs/app',
          assets: './docs/app/assets',
          scripts: './docs/app/scripts'
        }
      },
      nodeModules: {
        govUkBootstrap: './node_modules/govuk_bootstrap/dist',
        ngMocksFile: './node_modules/angular-mocks/angular-mocks.js'
      },
      dist: {
        root: './dist',
        assets: './dist/assets',
        scripts: './dist/scripts',
        sass: './dist/sass'
      },
      angular: {
        moduleName: 'govuk.components',
        moduleFile: 'govuk.components.module.js',
        templateFile: 'govuk.components.templates.js',
        docsModuleName: 'app'
      },
      repositoryName: 'govuk_angularjs_components'
    };

    config.karma = getKarmaOptions();

    function getKarmaOptions() {
      return {
        configFile: __dirname + '/karma.conf.js',
        plugins: [
          'karma-jasmine',
          'karma-coverage',
          'karma-phantomjs-launcher',
          'karma-chrome-launcher',
          'karma-sinon',
          'karma-junit-reporter',
          'karma-ng-html2js-preprocessor'
        ],
        files: [].concat(
          config.dev.vendor + '/**/*.js', // dependencies for running the angular app
          config.nodeModules.ngMocksFile,
          config.dev.scripts.templates + '/' + config.angular.templateFile,
          config.src.components + '/**/*.js', // app modules and files to test
          {
            pattern: config.src.components + '/**/*.html', //html files
            watched: true,
            served: true,
            included: true
          }
        ),
        coverageReporter: {
          dir: config.coverage,
          reporters: [ // types of reporters to use
            {type: 'html', subdir: 'report-html'}, // report in browser
            {type: 'lcov', subdir: 'report-lcov'}, // for jenkin reading
            {type: 'text-summary'} // output to the console
          ]
        },
        preprocessors: {
          './src/components/**/!(test)/*.js': ['coverage'],
          './src/components/**/*.html': 'ng-html2js'
        },
        ngHtml2JsPreprocessor: {
          stripPrefix: 'src/components',
          moduleName: 'templates'
        }
      }
    }
    return config;
  }
})();
