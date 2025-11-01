// components/dropdown.js

export function initializeDropdowns() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(navItem => {
        const navLink = navItem.querySelector('.nav-link');

        if (!navLink) return;

        // Handle mobile click toggle
        navLink.addEventListener('click', (e) => {
            // Only toggle on mobile
            if (window.innerWidth <= 1200) {
                e.preventDefault();
                navItem.classList.toggle('active');
            }
        });

        // Handle desktop hover - CSS handles this but we add touch support
        navItem.addEventListener('touchstart', (e) => {
            if (window.innerWidth > 1200) {
                e.preventDefault();
                // Close other dropdowns
                navItems.forEach(item => {
                    if (item !== navItem) {
                        item.classList.remove('active');
                    }
                });
                navItem.classList.toggle('active');
            }
        }, { passive: false });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.nav-item')) {
            navItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
}
