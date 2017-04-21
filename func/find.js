let numbers = [1, 2, 3, 4, 7, 24, 345];

var jojo = numbers.find(function (number) {
    return 0 === number % 3;
});
console.log(jojo)
