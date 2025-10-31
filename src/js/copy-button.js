// Copy button functionality for RPC endpoints
document.addEventListener('DOMContentLoaded', function() {
    const copyButtons = document.querySelectorAll('.copy-button');

    copyButtons.forEach(button => {
        button.addEventListener('click', async function(e) {
            e.preventDefault();
            e.stopPropagation();

            const targetId = this.getAttribute('data-copy');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const textToCopy = targetElement.textContent;

                try {
                    await navigator.clipboard.writeText(textToCopy);

                    // Visual feedback
                    this.classList.add('copied');
                    const originalHTML = this.innerHTML;

                    // Show checkmark
                    this.innerHTML = `
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8L6 11L13 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    `;

                    // Reset after 2 seconds
                    setTimeout(() => {
                        this.classList.remove('copied');
                        this.innerHTML = originalHTML;
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy text: ', err);
                }
            }
        });
    });
});
