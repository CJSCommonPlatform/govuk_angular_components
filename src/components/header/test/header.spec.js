describe('globalNav', function () {

  beforeEach(module('govuk.header'));
  beforeEach(module('govuk.components'));


  var rootScope, scope, compile, element, directiveScope;

  beforeEach(inject(function ($rootScope, $compile) {
    rootScope = $rootScope;
    scope = rootScope.$new();
    compile = $compile;
  }));

  describe('when no custom settings are set', function () {

    beforeEach(function () {
      element= angular.element('<header-directive></header-directive>');
      compile(element)(scope);
      scope.$digest();
      directiveScope = element.isolateScope();
    });

    it('should have default settings defined in the scope', function () {
      expect(directiveScope.globalNav).toBeDefined();
      expect(directiveScope.globalNav.pageTitle).toBeDefined();
      expect(directiveScope.globalNav.navItems).toBeDefined();
    });

  });

  describe('when custom settings are passed in', function () {

    beforeEach(function () {
      scope.globalNav = {
        pageTitle: {
          title: 'Test page',
          type: 'href',
          ref: '#'
        }
      };
      element= angular.element('<header-directive nav-settings="globalNav"></header-directive>');
      compile(element)(scope);
      scope.$digest();
      directiveScope = element.isolateScope();
    });

    it('should have pick up the provided settings', function () {
      expect(element.find('#proposition-name').text()).toBe(scope.globalNav.pageTitle.title);
    });

  });
});
