window.onload = function() {
    alert("Welcome to LUMORA!");
    
    const footerYears = document.querySelectorAll(".copyright");
    footerYears.forEach(footer => {
        footer.innerHTML = `© ${new Date().getFullYear()} LUMORA. All Rights Reserved.`;
    });
};

function checkAvailability(buttonElement) {
    const statusText = buttonElement.nextElementSibling;
    statusText.textContent = "Not Available";
    statusText.style.display = "block"; 
}