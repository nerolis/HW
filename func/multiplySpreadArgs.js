// multiply(1, 2, 3)
const multiply = (...args) => {
 return args.reduce(
 (acc, item) => acc * item,
   1
 );
}
console.log(multiply(1, 2, 3));