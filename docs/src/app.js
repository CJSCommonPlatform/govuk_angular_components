(function () {
  'use strict';

  angular.module('app')
    .run(function ($rootScope) {

      $scope.globalNav = {
        pageTitle: {
          title: 'GOV.UK AngularJS Elements',
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
