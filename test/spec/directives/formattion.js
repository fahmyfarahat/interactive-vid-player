'use strict';

describe('Directive: formattion', function () {

  // load the directive's module
  beforeEach(module('koraPlayerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<formattion></formattion>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the formattion directive');
  }));
});
