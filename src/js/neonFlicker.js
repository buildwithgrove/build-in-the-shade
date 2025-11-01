/**
 * Neon Flicker Pattern Cycling
 * Randomly selects initial pattern and cycles through all four patterns
 */

export function initializeNeonFlicker() {
    const neonElements = document.querySelectorAll('.neon-shade');

    if (neonElements.length === 0) return;

    const patterns = ['pattern-1', 'pattern-2', 'pattern-3', 'pattern-4'];
    const durations = [3500, 4200, 5100, 6700]; // Match CSS animation durations in ms

    neonElements.forEach(element => {
        // Randomly select starting pattern
        let currentPatternIndex = Math.floor(Math.random() * patterns.length);

        // Apply initial pattern
        element.classList.add(patterns[currentPatternIndex]);

        // Cycle through patterns
        function cyclePattern() {
            // Remove current pattern
            element.classList.remove(patterns[currentPatternIndex]);

            // Move to next pattern (cycles back to 0 after reaching the end)
            currentPatternIndex = (currentPatternIndex + 1) % patterns.length;

            // Add new pattern
            element.classList.add(patterns[currentPatternIndex]);

            // Schedule next cycle based on current pattern duration
            setTimeout(cyclePattern, durations[currentPatternIndex]);
        }

        // Start cycling after the initial pattern completes
        setTimeout(cyclePattern, durations[currentPatternIndex]);
    });
}
