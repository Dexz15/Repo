// Function to load HTML content into a specific element
function loadHTMLContent(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error(error));
}

// Load common sections
document.addEventListener("DOMContentLoaded", () => {
    loadHTMLContent('navbar', './html/navbar.html');
    loadHTMLContent('project', './html/project.html');
    loadHTMLContent('about-us', './html/about.html');
    loadHTMLContent('footer', './html/footer.html');
});