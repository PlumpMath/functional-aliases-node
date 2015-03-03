var assert = require('assert'),
  reduce  = require('../index.js').reduce;

describe('reduce', function() {
  it('returns the correct type based on context', function() {
    assert(typeof reduce([], function(acc, i) {
      return acc;
    }, {}) === 'object');
  });
});
