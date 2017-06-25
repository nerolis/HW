// Создание своего мэпа через forEach
// tip: babel запрещает всплытие(хоистинг)
const arr = [1, 2, 3 , 4]
const Mymap = fn => arr => {
 if (typeof fn !== 'function') {
  throw new Error('Error, its not a function')
}
 if (!Array.isArray(arr)) { // Для того, чтоб не происходило путаницы, есть Array.isArray
   throw new Error('Arr must be array') // ибо typeof видит в arr объект. Конечно, массив и есть объект согласно ему.
                                         // А, забыл про инстансоф ещё. Разница в том, что инстансоф не может глубоко сравнивать
 }
 let result = []
 let index = 0;
  arr.forEach(item => {
    result.push(fn(item, index));
    index += 1 // постфисный инкремент морально устарел из-за всяких редаксов
  });
  return result;
 }
const result = Mymap(i => i * 2)(arr) // carrying пример: const fn (тут море параметров ранее), а будет
                                       // const fn = (ran) => (chen) => (yukari) => (zun) ... ra + chen + yukari 'smth magic' + zun. а ещё в лодаше есть метод .curry
console.log(result)
