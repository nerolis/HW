// функция для массивов
var commonShow = function () {
	console.log('IDshow', this.id)
}
// делаем несколько массивов, чисто для массивов, имеющих одно свойство. если консолить дважды, для разных свойств, будут ошибки
var book = [
	{	'id' : 'b1', show: commonShow },
	{	'id' : 'History', show: commonShow },
	{	'author' : 'Hitler', show: commonShow },
	{	 'price' : 1939, show: commonShow },
	{	 'amount' : 42, show: commonShow}
	];
// Удаление
// Разумеется, с помощью delete можно динамически удалять. Вот, последняя консоль выдает undefined
delete book.amount
// Проверка на наличие
// if (!('author' in book)) {
// console.log('there is no author')
if ('id' in book) {
	console.log('ID: avaliable')
} else (console.log('ID: unavaliable'))

// Так же существует формао обращения к ключу, если его требования соотвествуют переменным.
// То есть, где book.author - обращение через точку возможно по причине того, что в объекте price и amount объявлены согласно требованиям переменных.
//
// // так же, имеет место вызов через замыкание, но не надо такое, когда есть this.
//  book.show = function () {
// // console.log('Author:', book.author);
// // вместо этого мы делаем this.author и получаем автора, круто, да.
// // this. ссылается на book, допустим, если мы бы после this не указали автора, то нам бы выдали целый объект, то есть всё, что в нём.
// // почему контекст this book? потому шо контекст вызова задается через >book.show();
// // Но и это всё мы тоже загоняем в спойлер и идем на самый вверх, создаем единную функцию для всех объектов.
// 	console.log(this.author)
//  };

book[0].show();
book[1].show();

// console.log('ID:', book['id'])
// console.log('Title:', book['title'])
// console.log('Author:', book.author)
// console.log('Price:', book.price)
// console.log('Amount:', book.amount)


// при передаче объекта в функцию, как и просто в объект(!), его копия не создается, это можно посмортеть так:
// И при возврате, тоже не создается
let ivan = { name: 'Ivanus', age: 26}
	let changeAge =	(user, amount) => {
	user.age += amount;
	}
	changeAge(ivan, 4);
	console.log(ivan.name, ivan.age);
// Что произойдет с объектом при перезаписи переменной
// присвоим в переменную ran ссылку на объект, после чего прсвоим в эту переменную новый объект
let ran = { name: 'Ran', age: 26 };
let chen = ran;
chen = { name: 'Chen', age: 99 }
console.log(chen.name, chen.age)
console.log(ran.name, ran.age) // При перезаписи перменной ссылающийся на объект(в данном случае, новый), объект не изменяется.

/// ES6 object.assign копирует объект. Например
/// var yukari = Object.assign({}, ran);
/// создаст новый объект юкари, заполнит его свойствами ран. вроде так.
/// В ran(предполагаемую копию) можно добавить запятую и { name: 'Yukari'} что сделает следующее:
/// console.log(ran.name); // Yukari
