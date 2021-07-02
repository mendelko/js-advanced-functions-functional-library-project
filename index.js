const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callBack) {
      if (collection.constructor.name == "Array"){
        collection.forEach(x => callBack(x));
      }else if (collection.constructor.name == "Object"){
        Object.values(collection).forEach(x => callBack(x));
      }
      return collection;

    },

    map: function(collection, callBack) {
      if (collection.constructor.name == "Array"){
        return collection.map(x => callBack(x));
      }else if (collection.constructor.name == "Object"){
        return Object.values(collection).map(x => callBack(x));
      }
    },

    reduce: function(collection, callback, acc) {
      const newCollect = [...collection];
      if (acc){
        for (let i = 0; i < newCollect.length; i++){
          acc = callback(acc, newCollect[i], newCollect);
        }
      }else {
        acc = newCollect[0];
        for (let i = 1; i < newCollect.length; i++){
        acc = callback(acc, newCollect[i], newCollect);
      }
    }
      return acc;
    },


    find: function(collection, predicate) {
      if (collection.constructor.name == "Array"){
        return collection.find(x => predicate(x));
      }else if (collection.constructor.name == "Object"){
        return Object.values(collection).find(x => predicate(x));
      }
    },

    filter: function(collection, predicate){
      return collection.filter(x => predicate(x))
    },

    size: function(collection){
      if (collection.constructor.name == "Array"){
        return collection.length;
    }else if (collection.constructor.name == "Object"){
      return Object.values(collection).length;
    }
  },

  first: function(array, n){
    if (n){
      return array.slice(0,n);
    } else {
      return array[0];
    }
    
  },

  last: function(array, n){
    if (n){
      return array.slice(-n);
    } else {
      return array[array.length -1]
    }
  },

  compact: function(array){
    const filtered = array.filter(x => x);
    return filtered;
  },

  sortBy: function(array, callback){
    const newArr = [...array]
    newArr.sort(function(a, b){
      return callback(a) - callback(b);
    })
    return newArr;
  }, 

  flatten: function(array, shallow){
    console.log(array)
    if (shallow){
      return array.flat();
    } else{
      return array.flat(Infinity)
    }
    
}, 

uniq: function(array, isSorted, callback){
  if (callback){
    return [...new Set(array.filter(callback))];
  } else{
    return [...new Set(array)];
  }
},

keys: function(object){
  return Object.keys(object)
},

values: function(object){
  return Object.values(object);
},

functions: function(object){
  console.log(object)
  const res = Object.keys(object).filter(obj => typeof object[obj] === 'function').sort();
  console.log(res)
  return res;
}




}
})()

fi.libraryMethod()
