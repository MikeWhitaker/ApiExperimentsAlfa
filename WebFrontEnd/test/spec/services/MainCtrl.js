'use strict';

describe('Service: MainCtrl', function () {

  // load the service's module
  beforeEach(module('webFrontEndApp'));

  // instantiate service
  var MainCtrl;
  beforeEach(inject(function (_MainCtrl_) {
    MainCtrl = _MainCtrl_;
  }));

  it('should do something', function () {
    expect(!!MainCtrl).toBe(true);
  });

});
