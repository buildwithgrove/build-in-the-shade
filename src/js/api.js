// Grove API Landing Page JavaScript

document.addEventListener('DOMContentLoaded', async function () {
    // Load footer component
    async function loadComponent(elementId, url) {
        try {
            const response = await fetch(url);
            const html = await response.text();
            document.getElementById(elementId).innerHTML = html;
        } catch (error) {
            console.error(`Error loading ${url}:`, error);
        }
    }

    // Load header and footer
    await loadComponent('header-content', '/header.html');
    await loadComponent('footer-content', '/footer.html');

    // Set current year in footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Mobile menu toggle (after header is loaded)
    const menuButton = document.getElementById('api-menu-button');
    const nav = document.getElementById('api-nav');

    if (menuButton && nav) {
        menuButton.addEventListener('click', function() {
            const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
            menuButton.setAttribute('aria-expanded', !isExpanded);
            menuButton.classList.toggle('active');
            nav.classList.toggle('active');
        });

        // Close menu when clicking nav links
        const navLinks = nav.querySelectorAll('a.api-nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuButton.classList.remove('active');
                nav.classList.remove('active');
                menuButton.setAttribute('aria-expanded', 'false');
            });
        });

        // Handle dropdown toggle on mobile
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            const navLink = item.querySelector('.api-nav-link');
            if (navLink) {
                navLink.addEventListener('click', function(e) {
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        item.classList.toggle('active');
                    }
                });
            }
        });
    }
    // Handle "Other" field visibility in beta form
    const entityTypeSelect = document.getElementById('entity-type');
    const otherField = document.getElementById('other-field');

    if (entityTypeSelect && otherField) {
        entityTypeSelect.addEventListener('change', function () {
            if (this.value === 'other') {
                otherField.style.display = 'block';
                document.getElementById('other-type').setAttribute('required', 'required');
            } else {
                otherField.style.display = 'none';
                document.getElementById('other-type').removeAttribute('required');
                document.getElementById('other-type').value = '';
            }
        });
    }

    // Handle updates form submission
    const updatesForm = document.getElementById('updates-form');
    if (updatesForm) {
        updatesForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const email = document.getElementById('email-updates').value;

            // TODO: Replace with actual API endpoint
            console.log('Updates form submitted:', { email });

            // Show success message
            showSuccessMessage(updatesForm, 'Thanks for signing up! We\'ll keep you updated.');
        });
    }

    // Handle beta form submission
    const betaForm = document.getElementById('beta-form');
    if (betaForm) {
        betaForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            // Clear previous messages
            clearMessages(betaForm);

            // Get form elements
            const emailInput = document.getElementById('email-beta');
            const entitySelect = document.getElementById('entity-type');
            const otherInput = document.getElementById('other-type');
            const submitButton = betaForm.querySelector('button[type="submit"]');

            // Validate required fields
            let isValid = true;

            if (!emailInput.value.trim()) {
                showFieldError(emailInput, 'Email is required');
                isValid = false;
            } else if (!isValidEmail(emailInput.value)) {
                showFieldError(emailInput, 'Please enter a valid email address');
                isValid = false;
            }

            if (!entitySelect.value) {
                showFieldError(entitySelect, 'Please select your organization type');
                isValid = false;
            }

            // If "Other" is selected, validate the other field
            if (entitySelect.value === 'other' && !otherInput.value.trim()) {
                showFieldError(otherInput, 'Please specify your organization type');
                isValid = false;
            }

            if (!isValid) {
                return;
            }

            // Show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Saving...';

            const formData = {
                email: emailInput.value.trim(),
                entity_type: entitySelect.value,
                other_type: entitySelect.value === 'other' ? otherInput.value.trim() : null
            };

            try {
                // Submit to Vercel serverless function (which proxies to Google Apps Script)
                const response = await fetch('/api/submit-waitlist', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    showSuccessMessage(betaForm, '🎉 Thanks for joining the waitlist! We\'ll be in touch soon with beta access.');
                } else {
                    throw new Error('Submission failed');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                showErrorMessage(betaForm, '❌ Something went wrong. Please try again or contact us directly.');
            } finally {
                // Reset button state
                submitButton.disabled = false;
                submitButton.textContent = 'Save my spot';
            }
        });
    }

    // Helper functions for form validation and messaging
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function clearMessages(form) {
        // Remove existing error messages
        form.querySelectorAll('.field-error').forEach(el => el.remove());
        form.querySelectorAll('.form-error').forEach(el => el.remove());
        form.querySelectorAll('.form-success').forEach(el => el.remove());

        // Remove error styling from fields
        form.querySelectorAll('input, select').forEach(field => {
            field.style.borderColor = '';
            field.style.borderWidth = '';
        });
    }

    function showFieldError(field, message) {
        // Add error styling to field
        field.style.borderColor = '#dc2626';
        field.style.borderWidth = '2px';

        // Create error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.style.cssText = `
            color: #dc2626;
            font-size: 0.875rem;
            margin-top: 4px;
            font-weight: 500;
        `;
        errorDiv.textContent = message;

        // Insert after the field
        field.parentNode.insertBefore(errorDiv, field.nextSibling);
    }

    function showErrorMessage(form, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-error';
        errorDiv.style.cssText = `
            background: linear-gradient(135deg, #FEF2F2 0%, #FEE2E2 100%);
            border: 1px solid rgba(220, 38, 38, 0.2);
            border-radius: 8px;
            padding: 16px;
            margin-top: 16px;
            color: #dc2626;
            font-size: 0.9375rem;
            text-align: center;
            font-weight: 500;
        `;
        errorDiv.textContent = message;
        form.appendChild(errorDiv);
    }

    function showSuccessMessage(form, message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'form-success';
        successDiv.style.cssText = `
            background: linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%);
            border: 1px solid rgba(56, 159, 88, 0.2);
            border-radius: 8px;
            padding: 16px;
            margin-top: 16px;
            color: #166534;
            font-size: 0.9375rem;
            text-align: center;
            font-weight: 500;
        `;
        successDiv.textContent = message;

        // Hide form and show success message
        form.style.display = 'none';
        form.parentElement.appendChild(successDiv);
    }

    // Add smooth scroll for anchor links (if needed in future)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add subtle animation on scroll for feature items
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature items and cards
    document.querySelectorAll('.feature-item, .use-case-card, .waitlist-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
