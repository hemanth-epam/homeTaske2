function getMiddle(s) {
  //Code goes here!
  var len = s.length;
  if (len % 2 == 0) {
    return s.charAt(len / 2 - 1) + s.charAt(len / 2);
  }
  return s.charAt(len / 2);
}
