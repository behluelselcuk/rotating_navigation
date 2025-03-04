'use strict'

// ZIEL
// Beim Klicken auf den Burger-Menü-Button
//     'main', 'circle' & 'nav' sollen die Klasse '.show-nav' dazubekommen
// Beim Klicken auf den X-Button
//     die '.show-nav'-Klasse soll entfernt werden



// Eingabe
let contentPage = document.querySelector('main');
let menuCircle = document.querySelector('.circle');
let navBar = document.querySelector('nav');
let menuBtn = document.querySelector('#open');
let closeBtn = document.querySelector('#close');


// VEARBEITUNG
function rollOut() {
    if (
        !contentPage.classList.contains('show-nav') &&
        !menuCircle.classList.contains('show-nav') &&
        !navBar.classList.contains('show-nav')
    ) {
        contentPage.classList.add('show-nav');
        menuCircle.classList.add('show-nav');
        navBar.classList.add('show-nav');
    }
}

function rollUp() {
    if (
        contentPage.classList.contains('show-nav') &&
        menuCircle.classList.contains('show-nav') &&
        navBar.classList.contains('show-nav')
    ) {
        contentPage.classList.remove('show-nav');
        menuCircle.classList.remove('show-nav');
        navBar.classList.remove('show-nav');
    }
}

menuBtn.addEventListener('click', rollOut);

closeBtn.addEventListener('click', rollUp);