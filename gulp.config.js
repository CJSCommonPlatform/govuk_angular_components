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
        govUkBootstrap: './dev/govuk_bootstrap',
        scripts: './dev/scripts',
        templates: './dev/templates'
      },
      docs: {
        root: './docs',
        src: {
          root: './docs/src',
          views: {
            root: './docs/src/views',
            pages: './docs/src/views/pages',
            partials: './docs/src/views/partials',
            handlebarsTemplate: './docs/src/views/template.hbs'
          }
        },
        app: {
          root: './docs/app',
          assets: './docs/app/assets',
          pageObject: {
            index : {
              title : 'Introduction',
              href : 'index.html'
            },
            css : {
              title : 'CSS',
              href : 'css.html'
            },
            elements : {
              title : 'Elements',
              href : 'elements.html'
            }
          }
        }
      },
      angular: {
        moduleName: 'govuk.components',
        moduleFile: 'govuk.components.module.js',
        templateFile: 'govuk.components.templates.js'
      },
      nodeModules: {
        govUkBootstrap: './node_modules/govuk_bootstrap/dist'
      },
      dist: {
        root: './dist'
      }
    };
  }
})();
