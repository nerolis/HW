// заполняем массив случайными значениями, new Array() - задаем длинну
// инициируем значение i(итератор) = 0. Переменная x, ограничивающая i(i < x)
// x ограничен new Array(число)
// после каждой итерации увеличиваем(инкремент) ++i
// присваивание months[i] = .ceil округляет до целого числа вверх
//random возвращает случайное число от 0 до 1, * 100, получаем от 1 до 100
// total - суммирует months[i], а += это total = total + months[i]
// поиск максимума и минимума.
// значит, у нас есть массив months.
// maxIndex и minIndex, разумеется просто индекс месяца.
// min и max = минимальное и максимальное число
// тот же цикл, каждый элемент массива сравниваем с текущим максимумом и минимум
// и если текущий оборот меньше минимума, то мы его присваиваиваем
// и считаем, что это наш минимум. Аналогично с максимум. Если больше, присваиваем.
// TODO как-то пофиксить момент с перменной в цикле, плюс добавить среднее число
// можно на изи убрать фишку со случайными значениями и заполнить массив самостоятельно, но нет.
let months = new Array(13);
let total = 0;
// let avg = total / months.length,
// 		aboveAvg = [], belowAvg = [];
let maxIndex = -1, minIndex = -1, max, min;
for (let i = +1, x = months.length; i < x; ++i) {
	months[i] = Math.ceil(Math.random() * 100);
  	total += months[i];
		if (minIndex < 0 || months[i] < min) {
				minIndex = i;
			 	min = months[i];
	}
		if (maxIndex < 0 || months[i] > max) {
				maxIndex = i;
				max = months[i];
		}
		// if (months[i] >= avg) {
		// 	aboveAvg.push(i);
		// } else {
		// 	belowAvg.push(i);
		// }

}
console.log(months);
console.log(total,'- суммарная выручка за год');
console.log('Месяц:', maxIndex, '- максимальная выручка:', max);
console.log('Месяц:', minIndex, '- минимальная выручка:', min);
