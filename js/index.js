

document.addEventListener('DOMContentLoaded', function() {
    window.toggleMenu = function() {
        var menu = document.querySelector('.burger__menu-list');
        var burgerBtn = document.querySelector('.burger__btn');

        var computedStyle = window.getComputedStyle(menu);
        var rightValue = parseInt(computedStyle.right);

        if (rightValue === 0) {
            menu.style.right = '-100%';
            setTimeout(function() {
                menu.style.display = 'none';
            }, 300); // 300ms - время анимации

            // Скрыть крестик
            burgerBtn.classList.remove('open');
            // Разблокировать фон
            document.body.style.overflow = 'auto';
        } else {
            menu.style.display = 'block';
            menu.style.right = '0px';

            // Показать крестик
            burgerBtn.classList.add('open');
            // Заблокировать фон
            document.body.style.overflow = 'hidden';
        }
    }

    // Добавляем обработчик событий для пунктов меню
    var menuItems = document.querySelectorAll('.burger__link');
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', function() {
            // Выполните дополнительные действия, если необходимо

            // Закрываем меню
            window.toggleMenu();
        });
    }
});

