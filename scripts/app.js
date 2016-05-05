(function () {
  'use strict';

  angular.module('app', [
    'ngSanitize',
    'ui.bootstrap',
    'ui.router',
    'smoothScroll',
    'govuk.components'
  ]);
})();

(function () {
  'use strict';

  angular.module('app')
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    var viewsPath = 'views/';

    $locationProvider.hashPrefix('!');

    $stateProvider
        .state('playground', {
          url:'/playground',
          templateUrl: viewsPath + 'playground.html'
        })
        .state('modules', {
          url:'/modules',
          templateUrl: viewsPath + 'modules.html'
        })
        .state('css', {
          url:'/css',
          templateUrl: viewsPath + 'css.html',
          controller: 'css',
          controllerAs: 'vm'
        })
        .state('components', {
          url:'/components',
          templateUrl: viewsPath + 'components.html',
          controller: 'components'
        })
        .state('getting-started', {
          url: '/',
          templateUrl: viewsPath + 'getting-started.html'
        })
      $urlRouterProvider.otherwise('/');
  });
})();

(function () {
  'use strict';

  angular.module('app')
    .run(function ($rootScope) {

      $rootScope.globalNav = {
        pageTitle: {
          title: 'GOV.UK AngularJS Components',
          type: 'href',
          ref: '#'
        },
        navItems: [
          {
            title: 'Getting Started',
            type: 'href',
            ref: '#!/'
          },
          {
            title: 'CSS Elements',
            type: 'href',
            ref: '#!/css'
          },
          {
            title: 'UI Components',
            type: 'href',
            ref: '#!/components'
          },
          {
            title: 'Ng Modules',
            type: 'href',
            ref: '#!/modules'
          },
          {
            title: 'Playground',
            type: 'href',
            ref: '#!/playground'
          }
        ]
      };
    });
})();

angular.module('app').directive('syntaxHighlighter', function () {
  return {
    restrict: 'A',
    scope: {
      source: '@', //interpolation not supported in the initial version
      language: '@'
    },
    template: function (element, attrs) {
      return '<pre><code class="language-' + (attrs.language || 'markup') + '"></code></pre>';
    },
    link: function (scope, element, attrs) {
      scope.languageClass = 'language-markup';
      function _getIndentation(string) {
        var match = string.match(/^ +/);
        return match ? match[0].length : 0;
      }
      //formatting html attribute to avoid angular to bypass angular's trimming
      var formattedSource = _.chain(element.attr('data-source') || element.attr('source'))
        .split('\n')
        .compact()
        .thru(function (lines) {
          var firstLineIndentation = _getIndentation(lines[0]);
          var currentLineIndentation;
          return _.map(lines, function (line) {
            currentLineIndentation = _getIndentation(line);
            //if current line indented less than the first, trim all indentation
            if (currentLineIndentation < firstLineIndentation) {
              return line.replace(/^ +/, '');
            }
            //otherwise, normalise indentation based on the first line
            return line.replace(new RegExp('^ {' + firstLineIndentation + '}'), '');
          });
        })
        .join('\n')
        .escape()
        .value();
      element.ready(function () {
        element.find('code').html(formattedSource);
        Prism.highlightElement(element.find('code')[0]);
      });
    }
  };
});
