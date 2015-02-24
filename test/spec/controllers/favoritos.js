'use strict';

describe('Controller: FavoritosCtrl', function () {

  // load the controller's module
  beforeEach(module('sputifyAngularJsApp'));

  var FavoritosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FavoritosCtrl = $controller('FavoritosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
