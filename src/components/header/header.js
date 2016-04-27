(function () {
  'use strict';

  angular
    .module('govuk.header', [])
    .directive('headerDirective', headerDirective);

  function headerDirective() {
    var directive = {
      link: link,
      templateUrl: 'header/header.tpl.html',
      restrict: 'EA',
      replace: true,
      scope: {
        navSettings: '='
      }
    };

    return directive;

    function link(scope, element, attrs, fn) {
      scope.menuLinksHiddenInMobile = true;
      if(scope.navSettings) {
        scope.globalNav = scope.navSettings;
      } else {
        scope.globalNav = {
          pageTitle: {
            title: 'Test Global Nav',
            type: 'href',
            ref: '#'
          },
          navItems: [
            {
              title: 'Getting Started',
              type: 'href',
              ref: '#!/'
            }
          ],
          displaySettings: {
            showUnderline: true
          }
        };
      }

    }
  }
})();
