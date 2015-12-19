'use strict';

describe('Directive: pbp', function () {

  // load the directive's module
  beforeEach(module('koraPlayerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pbp></pbp>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the pbp directive');
  }));
});
