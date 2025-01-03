function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Function to update and display the visit counter
function updateVisitCounter() {
    // Get the current count from localStorage, or initialize it to 0
    let visitCount = localStorage.getItem('visitCount');
    visitCount = visitCount ? parseInt(visitCount, 10) : 0;

    // Increment the visit count
    visitCount++;

    // Update the count in localStorage
    localStorage.setItem('visitCount', visitCount);

    // Display the count in the element with id="count"
    document.getElementById('count').textContent = visitCount;
}

// Call the function on page load
window.onload = updateVisitCounter;
