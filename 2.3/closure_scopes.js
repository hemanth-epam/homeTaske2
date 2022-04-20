function createFunctions(n) {
  var callbacks = [];

  for (var i = 0; i < n; i++) {
    callbacks.push(function () {
      return i;
    });
  }
  return function () {
    for (var i = 0; i < n; i++) {
      return callbacks[i];
    }
  };
}
