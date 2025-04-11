// scripts.js

// Example: Show alert on page load
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio site loaded successfully!");
});

function scrollCards(containerId, direction) {
    const container = document.getElementById(containerId);
    const scrollAmount = 320; // one card + gap
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}
function toggleResume() {
    const viewer = document.getElementById('resumeViewer');
    const isVisible = !viewer.classList.contains('d-none');

    if (isVisible) {
        viewer.classList.add('d-none');
        viewer.innerHTML = ""; // remove iframe
    } else {
        viewer.innerHTML = `<iframe src="assets/Shruti_Bora_Resume.pdf" width="100%" height="800px" style="border: none;"></iframe>`;
        viewer.classList.remove('d-none');
        viewer.scrollIntoView({ behavior: 'smooth' });
    }
}
