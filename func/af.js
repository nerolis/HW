'use strict'
// (x, y) - входящие аргументы function()
let af = (x, y) => x + y
				// x + y - здесь возвращение как результат (return)
console.log(af(10, 20));
// если входящий аргумент 1, то можно не оборачивать скобочками
let af2 = x => x + 2;
console.log(af2(10));
// если af ничего не принимает(аргументов нуль), то можно просто оставить круглые скобочки пустыми.
let af3 = () => 10 + 2;
console.log(af3());
// несколько инструкций af
let af4 = x => {
let temp = x + 10;
return temp;
// здесь return уже мастхев
};
console.log(af4(10));
// af привязывается к контексту
// Пример:ITVDN

				class My1 {
					constructor ()
					{
						this._name = 'My1';
					}


						doWork() {
							setTimeout(function () { // setTimeout является методом глобального объекта .window
																			// когда эта функция будет вызываться в сеттаймауте this. будет указывать на .window
																			// вместо того чтоб указывать на My1
								console.log(this._name);
							}, 10);
						}
					}

				class My2 {
					constructor ()
				{
						this._name = 'My2';
			  }

				doWork() {
						// При использовании af происходит захват значения
						// в соотвествии с текущим котнекстом функции
						// this. будет ссылаться на My2, и всё будет хорошо
						// name будет значением My2
						setTimeout(() => {
							console.log(this._name);
						}, 10);
				}
			}

		let m1 = new My1();
		let m2 = new My2();

		m1.doWork();
		m2.doWork();
