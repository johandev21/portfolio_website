const closeMenuBtn = document.querySelector("#mobile_nav__close-menu");
const openMenuBtn = document.querySelector("#header__menu-icon");
const mobileNav = document.querySelector("#mobile_nav");
const themeToggles = document.querySelectorAll(".nav__theme-toggle");

function disableBodyScroll() {
    document.body.style.overflow = 'hidden';
}

function enableBodyScroll() {
    document.body.style.overflow = '';
}

closeMenuBtn.addEventListener("click", () => {
    mobileNav.classList.remove("mobile_nav--open");
    enableBodyScroll();
});

openMenuBtn.addEventListener("click", () => {
    mobileNav.classList.add("mobile_nav--open");
    disableBodyScroll();
});

const navLinks = document.querySelectorAll(".mobile_nav .nav__link");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileNav.classList.remove("mobile_nav--open");
        enableBodyScroll();
    });
});

function setTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('theme', themeName);

    themeToggles.forEach(toggle => {
        toggle.className = themeName === 'light'
            ? 'ri-moon-line nav__theme-toggle'
            : 'ri-sun-line nav__theme-toggle';
    });
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'dark';
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

(function () {
    setTheme(localStorage.getItem('theme') || 'dark');
})();

themeToggles.forEach(toggle => {
    toggle.addEventListener('click', toggleTheme);
});