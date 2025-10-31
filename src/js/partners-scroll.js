// Partners infinite scroll - CSS animation based
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.partners-track');
    if (!track) return;

    // Store original cards
    const cards = Array.from(track.children);

    // Duplicate cards once for seamless loop
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
    });
});
