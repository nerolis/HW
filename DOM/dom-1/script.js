// Переменные
let newElement = document.createElement('div');
let container = document.getElementById('container');

// Создание элемента
newElement.setAttribute('class', 'inner_block new_background');
newElement.setAttribute('id', 'inner_' + Date.now());
newElement.textContent = 'newDiv';
//newELement

//prepend(аналог JQ, насколько понял)
let prepend = (parentDiv, newElem) => {
    setElement = parentDiv.firstChild;
    parentDiv.insertBefore(newElem, setElement);
}; // prepend. (в ДЗ-2 превратить в рекурсивную)

//Вызов
prepend( container, newElement);
