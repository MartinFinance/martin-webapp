

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}

const add = curry((a, b, c) => { return a + b + c; });

console.log(add(1, 3, 4, 5, 5));
console.log(add(1)(2)(3));


function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  }
}
// function createAdd() {
//   let acc = 0;

//   const _add = (...args) => {
//     args.forEach(item => {
//       acc += item;
//     });

//     console.log(acc);
//     return _add;
//   };

//   return _add;
// }

// const add = createAdd();

// const sum = add(1)(2)(3)(4, 5);

