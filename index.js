function map(arr, fn) {
  return arr.map(fn);
}

function concat(array, otherArray) {
  return array.concat(otherArray);
}

function reduce(arr, reduceFn, initialValue) {
  return arr.reduce(reduceFn, initialValue);
}

// Shallow merge multiple javascript objects.
function merge(...objects) {
  return reduce(objects, function(acc, object) {
    for (var i in object) {
      acc[i] = object[i];
    }
    return acc;
  }, {});
}

function find(arr, test, ctx) {
  var result;
  arr.some(function(el, i) {
    return test.call(ctx, el, i, arr) ? ((result = el), true) : false;
  });
  return result;
}

module.exports = {
  map: map,
  reduce: reduce,
  merge: merge,
  concat: concat,
  find: find
};
