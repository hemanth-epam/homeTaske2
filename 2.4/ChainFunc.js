function add(n) {
  // Let the currying begin!
  let val = function (a) {
    return add(n + a);
  };
  val.valueOf = () => n;
  return val;
}
