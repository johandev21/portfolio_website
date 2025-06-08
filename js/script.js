const closeMenuBtn = document.querySelector("#mobile_nav__close-menu");
const openMenuBtn = document.querySelector("#header__menu-icon");
const mobileNav = document.querySelector("#mobile_nav");
const themeToggles = document.querySelectorAll(".nav__theme-toggle");

// Mobile menu functionality
closeMenuBtn.addEventListener("click", () => {
    mobileNav.style.top = "-60vh"
})

openMenuBtn.addEventListener("click", () => {
    mobileNav.style.top = "0"
})

// Theme toggle functionality
function setTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('theme', themeName);
    
    // Update icon for all theme toggles
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

// Initialize theme
(function () {
    setTheme(localStorage.getItem('theme') || 'dark');
})();

// Add click handlers to all theme toggle buttons
themeToggles.forEach(toggle => {
    toggle.addEventListener('click', toggleTheme);
});