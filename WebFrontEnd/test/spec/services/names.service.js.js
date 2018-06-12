'use strict';

describe('Service: names.service.js', function () {

  // load the service's module
  beforeEach(module('webFrontEndApp'));

  // instantiate service
  var names.service.js;
  beforeEach(inject(function (_names.service.js_) {
    names.service.js = _names.service.js_;
  }));

  it('should do something', function () {
    expect(!!names.service.js).toBe(true);
  });

});
