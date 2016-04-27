/*global require, module*/

(function () {
  'use strict';

  module.exports = function () {
    return {
      src: {
        root: './src',
        components: './src/components'
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
        }
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
        govUkBootstrap: './node_modules/govuk_bootstrap/dist'
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
  }
})();
