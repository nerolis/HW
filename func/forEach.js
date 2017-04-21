let numbers = [1, 2, 3, 345, 4, 7, 24];

var max, maxIndex;

numbers.forEach(function (number, i) {
	if (!max || number > max) {
    max = number;
      maxIndex = i;
    }
    });
console.log(max);
