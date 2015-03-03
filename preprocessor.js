var fs         = require('fs'),
    transform  = require('babel').transformFileSync,
    origJs     = require.extensions['.js'];

require.extensions['.js'] = function(module, filename) {
  return module._compile(transform(filename).code, filename);
};
