import { loadComponent } from './utils/dom.js';
import { initializeMobileMenu } from './components/mobileMenu.js';
import { initializeDropdowns } from './components/dropdown.js';

async function init() {
    try {
        // Load header and footer components
        await Promise.all([
            loadComponent('header-content', '/header.html'),
            loadComponent('footer-content', '/footer.html')
        ]);

        // Initialize mobile menu
        initializeMobileMenu();

        // Initialize dropdown menus
        initializeDropdowns();

        // Update copyright year
        const yearElement = document.getElementById('current-year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    } catch (error) {
        console.error('Error initializing application:', error);
    }
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}