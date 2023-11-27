 const headers = document.querySelectorAll("[data-name='accordeon-title']"); 
// Ищем все элементы заголовков по селектору ("[data-name='accordeon-title']"), Массиво-подобные структуры.

headers.forEach(function (item) { // на место item будет подставлен headers
    item.addEventListener('click', showContent); // Вешаем прослушку click на каждый элемент через метод forEach
})

function showContent() {
    this.nextElementSibling.classList.toggle('hidden');// this - ссылается на тот элемент по которому мы сделали click
    // nextElementSibling - следующий соседствующий элемент
    //  classList – объект с методами add/remove/toggle
    // toggle - Включить / выключить
}
