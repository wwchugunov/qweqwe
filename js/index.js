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
            }, 300); 

            burgerBtn.classList.remove('open');
            document.body.style.overflow = 'auto';
        } else {
            menu.style.display = 'block';
            menu.style.right = '0px';
            burgerBtn.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
    }

    var menuItems = document.querySelectorAll('.burger__link');
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', function() {
            window.toggleMenu();
        });
    }
});

function callPhoneNumber(phoneNumber) {
    window.location.href = 'tel:' + phoneNumber;
}

$(document).ready(function() {
    $('[data-fancybox]').fancybox({
        youtube: {
            controls: 0,
            showinfo: 0
        },
        vimeo: {
            color: 'f00'
        }
    });
});

function scrollToContact() {
    var contactElement = document.getElementById('contakt');
    if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
    }
}