// Находим наибольший общий делитель для a и b;
const GCD = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);

  if (b > a) {
    let remainder = a;
    a = b;
    b = remainder;
  }

  while (true) {
    if (b == 0) return a;
    a %= b;

    if (a == 0) return b;
    b %= a;
  }
}
console.log(GCD(24, 18)); //6 
// Умножение
const DoubleIt = value => value * 2;
console.log(DoubleIt(50)) //100
// Найти наибольшее число в массиве;
const findLargest = arr => {
  let largest = arr[0];

  for (let i in arr) {
    if (arr[i] > largest) largest = arr[i];
  }

  return largest;
}
let arr = [10, 5, 100, 600, 601, 602, 999, 50, 30, 50, 1004, 2, 1, 3, 0, 4, 1001]
console.log(findLargest(arr)); // 1004

// Поиск повторов
const containsDuplicates = arr => {
  let result = [];

  arr.map((i, j) => {
    if (arr.indexOf(i, j + 1) > -1) {
      if (result.indexOf(i) === -1) result.push(i);
    }
  });
  return result;
}

let arr = [50, 51, 52, 53, 400, 41, 41, 401, 200, 500, 51, 500, 600, 999, 30, 31, 44, 55];
console.log(containsDuplicates(arr)); // [51, 500];

5 + x
