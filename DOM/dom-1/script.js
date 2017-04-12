let newElement = document.createElement('div');
let container = document.getElementById('container');

// Создание элемента. Атр. - для задания №4
newElement.setAttribute('class', 'inner_block new_background');
newElement.setAttribute('id', 'inner_' + Date.now());
newElement.textContent = 'newDiv';
//newELement

//Функция prepend(аналог JQ, насколько понял)
let prepend = (parentDiv, newElem) => {
    setElement = parentDiv.firstChild;
    parentDiv.insertBefore(newElem, setElement);
}; // prepend. (в ДЗ-2 превратить в рекурсивную)

//Вызов функции
prepend( container, newElement);
