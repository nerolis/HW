let numbers = [1, 2, 3, 4, 7, 24, 345];

var jojo = numbers.map(function (number) {
    return number * number;
});
console.log(jojo)


//  For
let numbersTwo = [1, 2, 3, 4, 7, 24, 345];

var jojoTwo = [], i, x;
for (i = 0, x = numbersTwo.length; i < x; ++i) {
  jojoTwo.push(numbersTwo[i] * numbersTwo[i]);
}
console.log(jojoTwo)
