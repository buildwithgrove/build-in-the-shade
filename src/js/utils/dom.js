export async function loadComponent(elementId, templatePath) {
    try {
        const response = await fetch(templatePath);
        if (!response.ok) {
            throw new Error(`Failed to load ${templatePath}`);
        }
        const html = await response.text();
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = html;
            return html;
        } else {
            throw new Error(`Element with id ${elementId} not found`);
        }
    } catch (error) {
        console.error('Error loading component:', error);
    }
}