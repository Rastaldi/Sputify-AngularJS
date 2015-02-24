'use strict';

describe('Controller: ConciertosCtrl', function () {

  // load the controller's module
  beforeEach(module('sputifyAngularJsApp'));

  var ConciertosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConciertosCtrl = $controller('ConciertosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
