const dropdownMaimun = document.querySelector('#extMaimun');
const dropdownTjong = document.querySelector('#extTjong');
const dropdownTipTop = document.querySelector('#extTipTop');

const extMaimun = document.querySelector('#seemoreMaimun');
const extTjong = document.querySelector('#seemoreTjong');
const extTipTop = document.querySelector('#seemoreTipTop')

const crossMaimun = document.querySelector('#crossMaimun');
const crossTjong = document.querySelector('#crossTjong');
const crossTipTop = document.querySelector('#crossTipTop');

dropdownMaimun.style.display = "none";
dropdownTjong.style.display = "none";
dropdownTipTop.style.display = "none";

// Display Extended Content
extMaimun.addEventListener('click', () => {
    dropdownMaimun.style.display = "block";
});
extTjong.addEventListener('click', () => {
    dropdownTjong.style.display = "block";
});
extTipTop.addEventListener('click', () => {
    dropdownTipTop.style.display = "block";
});

// Close Extended Content
crossMaimun.addEventListener('click', () => {
    dropdownMaimun.style.display = "none";
});
crossTjong.addEventListener('click', () => {
    dropdownTjong.style.display = "none";
});
crossTipTop.addEventListener('click', () => {
    dropdownTipTop.style.display = "none";
});
