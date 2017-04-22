var bounds = require('..');

/* global describe, it */

describe('bounds', function() {
  it('should fail on empty', function() {
    bounds([])([1, 1]).should.be.not.ok();
  });

  it('should succeed if point is in the range', function() {
    bounds([[[-1, 0], [3, 5]]])([1, 1]).should.be.ok();
  });

  it('should succeed if point is on the border', function() {
    bounds([[[0, 0], [1, 1]]])([0, 1]).should.be.ok();
  });

  it('should succeed if point is in one of the ranges', function() {
    bounds([[[-1, 0], [3, 5]], [[100, 20], [115, 80]]])([1, 1]).should.be.ok();
  });

  it('should succeed if point is inside the polygon', function() {
    bounds([[[ 1, 1 ], [ 1, 2 ], [ 2, 2 ], [ 2, 1 ]]])([1.5, 1.5]).should.be.ok();
  });

  it('should succeed if point is on the border of the polygon', function() {
    bounds([[[ 1, 1 ], [ 1, 2 ], [ 2, 2 ], [ 2, 1 ]]])([1, 1]).should.be.ok();
  });

  it('should succeed if point is in one of the shapes', function() {
    bounds([[[ 1, 1 ], [ 1, 2 ], [ 2, 2 ], [ 2, 1 ]], [[2, 2], [4, 4]]])([3, 3]).should.be.ok();
  });

  it('should fail point is in none of the ranges', function() {
    bounds([[[-1, 0], [3, 5]], [[100, 20], [115, 80]]])([4, 1]).should.not.be.ok();
  });

  it('bounds extend', function () {
    var bnds;

    bnds = bounds();
    bnds([0, 1]).should.not.be.ok();
    bnds([1, 0]).should.not.be.ok();
    bnds.extend([0, 1]);
    bnds.extend([1, 0]);
    bnds([0, 0]).should.be.ok();
    bnds([0, 1]).should.be.ok();
    bnds([1, 0]).should.be.ok();
    bnds([1, 1]).should.be.ok();

    bnds.get().should.eql([[[0, 0], [1, 1]]]);

    bounds([]).should.not.have.property('extend');
    bounds([[[0.5, 0.5], [1, 1]]]).should.not.have.property('extend');
  });
});
