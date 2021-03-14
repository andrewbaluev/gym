(function ($) {
    $(function () {

        $('ul.tabs-item__list').on('click', 'li:not(.active)', function () {
            $(this) // По клику на item
                .addClass('active') // Добавляет класс active к item на который кликнули
                .siblings() // Получаем все элементы находящиеся на одном уровне вложенности (смежные элементы) с элементом на который кликнули
                .removeClass('active') // Удаляет класс active у другого элемента
                .closest('div.tabs__wrapper') // Возвращает первый подходящий элемент, соответствующий заданному селектору выше в дереве DOM (tabs-item)
                .find('div.tabs-item__content') // Возвращает потомков, если они соответствуют селектору tabs-item__content
                .removeClass('active') // Удаляет класс active у tabs-item__content
                .eq($(this).index()) // Позволяет выбрать элемент с конкретным индексом из набора выбранных элементов
                .addClass('active'); // Добавляет класс active к tabs-item__content
        });

    });
})(jQuery);