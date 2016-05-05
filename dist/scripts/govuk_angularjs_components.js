(function (ng) {
'use strict';
ng.module('govuk.components', ['govuk.footer','govuk.header']);
})(angular);
(function () {
  'use strict';

  angular
    .module('govuk.footer', [])
    .directive('footerDirective', footerDirective);

  /* @ngInject */
  function footerDirective($sce) {
    var directive = {
      link: link,
      templateUrl: 'footer/footer.tpl.html',
      restrict: 'EA',
      scope: {
        settings: '=?footerSettings'
      }
    };

    return directive;

    function link(scope, element, attrs) {
      var defaultSettings = {
        links: [
          { title: 'All GOV.UK blogs', ref: 'https://www.blog.gov.uk', type: 'href' },
          { title: 'All GOV.UK blog posts', ref: 'https://www.blog.gov.uk/all-posts/', type: 'href' },
          { title: 'GOV.UK', ref: 'https://www.gov.uk', type: 'href' },
          { title: 'All departments', ref: 'https://www.gov.uk/government/organisations', type: 'href' },
          { title: 'All topics', ref: 'https://www.gov.uk/government/topics', type: 'href' },
          { title: 'All policies', ref: 'https://www.gov.uk/government/policies', type: 'href' },
          { title: 'Cookies', ref: 'https://www.blog.gov.uk/cookies', type: 'href' }
        ],

        copyright: {
          link: 'https://www.nationalarchives.gov.uk/information-management/our-services/crown-copyright.htm',
          text: 'Crown copyright'
        },

        licence: {
          link: 'https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/',
          text: 'All content is available under the \
                 <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license"> \
                  Open Government Licence v3.0 \
                 </a>, \
                 except where otherwise stated'
        }
      };
      var mergedSettings = angular.extend(defaultSettings, scope.settings);

      mergedSettings.licence.text = $sce.trustAsHtml(mergedSettings.licence.text.toString());

      scope.settings = mergedSettings;
    }
  }
})();

(function () {
  'use strict';

  angular
    .module('govuk.header', [])
    .directive('headerDirective', headerDirective)

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

(function(module) {
try {
  module = angular.module('govuk.components');
} catch (e) {
  module = angular.module('govuk.components', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('header/header.tpl.html',
    '<header role="banner" id="global-header" class="with-proposition">\n' +
    '  <div class="header-wrapper">\n' +
    '    <div class="header-global">\n' +
    '      <div class="header-logo">\n' +
    '        <a href="https://www.gov.uk" title="Go to the GOV.UK homepage" id="logo" class="content">\n' +
    '          <img src="assets/images/gov.uk_logotype_crown_invert_trans.png" width="35" height="31" alt=""> GOV.UK\n' +
    '        </a>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="header-proposition">\n' +
    '      <div class="content">\n' +
    '        <a class="menu" data-ng-click="menuLinksHiddenInMobile=false" data-ng-show="menuLinksHiddenInMobile">Menu</a>\n' +
    '        <nav id="proposition-menu">\n' +
    '          <a id="proposition-name" data-ng-if="globalNav.pageTitle.type === \'href\'" href="#">{{globalNav.pageTitle.title}}</a>\n' +
    '          <a id="proposition-name" data-ng-if="globalNav.pageTitle.type === \'ui-sref\'" data-ui-sref="#">{{globalNav.pageTitle.title}}</a>\n' +
    '          <ul id="proposition-links" data-ng-class="{\'proposition-links-hidden\':menuLinksHiddenInMobile}">\n' +
    '            <li data-ng-repeat="item in globalNav.navItems">\n' +
    '              <a data-ng-if="item.type === \'href\'" href="{{item.ref}}">{{item.title}}</a>\n' +
    '              <a data-ng-if="item.type === \'ui-sref\'" data-ui-sref="{{item.ref}}">{{item.title}}</a>\n' +
    '            </li>\n' +
    '          </ul>\n' +
    '        </nav>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</header>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('govuk.components');
} catch (e) {
  module = angular.module('govuk.components', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('footer/footer.tpl.html',
    '<footer class="group js-footer" id="footer" role="contentinfo">\n' +
    '  <div class="footer-wrapper">\n' +
    '    <div class="footer-meta">\n' +
    '      <div class="footer-meta-inner">\n' +
    '        <ul ng-if="settings.links.length">\n' +
    '          <li data-ng-repeat="link in settings.links">\n' +
    '            <a data-ng-if="link.type === \'href\'" data-ng-href="{{ link.ref }}">{{ link.title }}</a>\n' +
    '            <a data-ng-if="link.type === \'ui-sref\'" data-ui-sref="{{ link.ref }}">{{ link.title }}</a>\n' +
    '          </li>\n' +
    '        </ul>\n' +
    '        <div class="open-government-licence">\n' +
    '          <p class="logo"><a data-ng-href="{{ settings.licence.link }}" rel="license">Open Government Licence</a></p>\n' +
    '          <p class="licence-text" data-ng-bind-html="settings.licence.text"></p>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="copyright">\n' +
    '        <a data-ng-href="{{ settings.copyright.link }}">&copy; {{ settings.copyright.text }}</a>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</footer>\n' +
    '');
}]);
})();
