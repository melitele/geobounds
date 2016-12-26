var bounds = require('..');

/* global describe, it */

describe('bounds', function() {
	it('should fail on empty', function() {
		bounds([])([1, 1]).should.be.not.ok();
	});

  it('should succeed if point is in the range', function() {
    bounds([[[-1, 0], [3, 5]]])([1, 1]).should.be.ok();
  });

  it('should succeed if point is in one of the ranges', function() {
    bounds([[[-1, 0], [3, 5]], [[100, 20], [115, 80]]])([1, 1]).should.be.ok();
  });

  it('should fail point is in none of the ranges', function() {
    bounds([[[-1, 0], [3, 5]], [[100, 20], [115, 80]]])([4, 1]).should.not.be.ok();
  });

});
