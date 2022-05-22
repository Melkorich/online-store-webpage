//фмильтр на мобильных утсройствах
const sideBarBtn = document.querySelector('.menu-icon-wrapper');
const sidebar = document.querySelector('.sidebar');

sideBarBtn.onclick = function () {
    sidebar.classList.toggle('sidebar--mobile-active');
    sideBarBtn.classList.toggle('toggle-sidebar--active');
};


//показать еще 3 карточки
const ShowMoreCardsBtn = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden');

ShowMoreCardsBtn.addEventListener('click', function () {

    hiddenCards.forEach(function (card) {
        card.classList.remove('card-link--hidden');
    })

    ShowMoreCardsBtn.style.display = "none";
});


//показать/скрыть контент внутри виджетов
const widgets = document.querySelectorAll('.widget');

widgets.forEach(function (widget) {
    widget.addEventListener('click', function (e) {
        if (e.target.classList.contains('widget__title')) {
            e.target.classList.toggle('widget__title--active');
            e.target.nextElementSibling.classList.toggle('widget__body--hidden');
        }
    })
});

//location кнопка Любой

const checkboxAny = document.getElementById('location-05');
const topLocationCheckboxes = document.querySelectorAll('[data-location]');

//клик по кнопке любая и отключение других чекбоксов
checkboxAny.addEventListener('change', function () {
    if (checkboxAny.checked) {
        topLocationCheckboxes.forEach(function (item) {
            item.checked = false;
        });
    }
});

//клик по другим кнопкам в location и отключение кнопки Любой
topLocationCheckboxes.forEach(function (item) {
    item.addEventListener('change', function () {
        if (checkboxAny.checked) {
            checkboxAny.checked = false;
        }
    })
});

//показать еще три чекбокса в фильттрах

const showMoreOptions = document.querySelector('.widget__btn-show-hidden');
const hiddenCheckboxes = document.querySelectorAll('.checkbox--hidden');

showMoreOptions.addEventListener('click', function () {

    //если блоки были скрыты - значит показываем
    if (showMoreOptions.dataset.options == 'hidden') {
        hiddenCheckboxes.forEach(function (item) {
            item.style.display = 'block';
        });
        showMoreOptions.innerText = 'Скрыть доп опции';
        showMoreOptions.dataset.options = 'visible';
    }

    //если блоки были видны - значит скрываем
    else if (showMoreOptions.dataset.options == 'visible') {

        hiddenCheckboxes.forEach(function (item) {
            item.style.display = 'none';
        });
        showMoreOptions.innerText = 'Показать ещё';
        showMoreOptions.dataset.options = 'hidden';
    }
});