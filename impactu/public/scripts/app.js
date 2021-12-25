const getLogo = document.querySelectorAll('.logo.desktop path');
const getNavbarLinks = document.querySelectorAll('.links a');
const getSticker = document.querySelectorAll('.sticker');

window.addEventListener('scroll', function () { // altera os estilos da navbar com scroll (a height, cor de background, cor dos elementos, etc)
    if (window.scrollY > 100) {
        getMobileHeader.style.backgroundColor = '#10845A';
    } else {
        getMobileHeader.style.backgroundColor = 'transparent';
    }

    function changeStyle(e, classe) { // criei esta função porque achei que ia precisar de manipular a dom mesmo muitas vezes, mas acabei por enquanto só precisar dela 3 vezes xD (para já)
        for (let i = 0; i < e.length; i++) {
            if ((window.scrollY > 1100 && window.scrollY < 3350) || window.scrollY > 4200) {
                e[i].classList.add(classe);
            } else {
                e[i].classList.remove(classe);
            }
            if ((window.scrollY >= 3350 && window.scrollY < 4000) && e === getSticker) {
                e[i].classList.add(classe);
            } else if (window.scrollY >= 4000 && e === getSticker) {
                e[i].classList.remove(classe);
            }
        }
    }
    changeStyle(getNavbarLinks, 'nav-links-scrolling-active');
    changeStyle(getLogo, 'logo-scrolling-active');
    changeStyle(getSticker, 'sticker-scrolling-active');
})


getMobileHeader = document.getElementsByClassName('mobile-header-wrapper')[0]; // faz aparecer e desaparecer a navbar com scroll

var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        getMobileHeader.style.top = "0";
    } else {
        getMobileHeader.style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;

    if (currentScrollPos <= 0) {
        getMobileHeader.style.top = "0";
    }
}


// ----------------------------------------



window.addEventListener('scroll', reveal); // mostra os elementos apenas depois do utilziador fazer scroll para determinada secção, colocando a classe .reveal nas secções desejadas

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}