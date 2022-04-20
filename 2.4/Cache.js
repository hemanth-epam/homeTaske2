function cache(func) {
  const cachedResults = {};
  return (...args) => {
    console.log(args);
    var key = JSON.stringify(args);
    //  var key = args.toString();  //not working because args contains objects,undefined ...
    if (!(key in cachedResults)) {
      const result = func.apply(null, args);
      cachedResults[key] = result;
    } 
        return cachedResults[key];
  };
}