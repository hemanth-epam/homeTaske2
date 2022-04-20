var Cat = (function () {
  var instances = { count: 0, totalWeight: 0, averageWeight: 0 };

  function constructor(name, weight) {
    if (!name || !weight) {
      throw new Error("plz provide both name and weight");
    }
    instances.count++;
    this.name = name;

    Object.defineProperty(this, "weight", {
      get: function () {
        return this.weight1 || 0;
      },
      set: function (val) {
        instances.totalWeight += val - this.weight;
        instances.averageWeight = instances.totalWeight / instances.count;
        return (this.weight1 = val);
      },
    });

    this.weight = weight;
  }
  constructor.averageWeight = () => instances.averageWeight;
  return constructor;
})();

garfield = new Cat("garfield", 25);
Cat.averageWeight();

felix = new Cat("felix", 15);
Cat.averageWeight();
