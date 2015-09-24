var assert = require('assert');
var ml = require('../dist/math-light');

describe('arithmetic', function () {
  it('should evaluate arithmetic expressions', function () {
    assert.equal(17, ml.eval('1 + 2 * 8'));
  });

  it('should evaluate trig expressions', function () {
    assert.equal(5, ml.eval('5*cos(0 rad)'));
  });

  it('should convert units', function () {
    assert.equal(1000, ml.eval('1 km to m').value);
  });

  it('should recognize pi', function () {
    assert.equal(Math.PI, ml.eval('pi'));
  });
});
