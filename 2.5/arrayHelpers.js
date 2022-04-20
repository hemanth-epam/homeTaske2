// TO
Array.prototype.square = function () {
  var b = [];
  for (let i = 0; i < this.length; i++) {
    b[i] = this[i] * this[i];
  }
  return b;
};

Array.prototype.cube = function () {
  var b = [];
  for (let i = 0; i < this.length; i++) {
    b[i] = this[i] * this[i] * this[i];
  }
  return b;
};

Array.prototype.sum = function () {
  var s = 0;
  for (let i = 0; i < this.length; i++) {
    s += this[i];
  }
  return s;
};

Array.prototype.average = function () {
  var s = 0;
  for (let i = 0; i < this.length; i++) {
    s += this[i];
  }
  let avg = s / this.length;
  return avg;
};

Array.prototype.even = function () {
  var b = [],
    j = 0;
  for (let i = 0; i < this.length; i++) {
    if (this[i] % 2 == 0) b[j++] = this[i];
  }
  return b;
};

Array.prototype.odd = function () {
  var b = [],
    j = 0;
  for (let i = 0; i < this.length; i++) {
    if (this[i] % 2 != 0) b[j++] = this[i];
  }
  return b;
};
