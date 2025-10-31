// components/mobileMenu.js

export function initializeMobileMenu() {
    // Support both old and new header styles
    const menuButton = document.querySelector('.menu-button, .api-menu-button');
    const nav = document.querySelector('.nav, .api-nav');
    const authButtons = document.querySelector('.auth-buttons');

    if (!menuButton || !nav) {
        console.warn('Mobile menu elements not found');
        return;
    }

    menuButton.addEventListener('click', () => {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !isExpanded);
        nav.classList.toggle('active');
        if (authButtons) {
            authButtons.classList.toggle('active');
        }
        menuButton.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.header-content, .api-header-content')) {
            nav.classList.remove('active');
            if (authButtons) {
                authButtons.classList.remove('active');
            }
            menuButton.classList.remove('active');
            menuButton.setAttribute('aria-expanded', 'false');
        }
    });
}