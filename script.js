function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Function to update and display the visit counter along with previous visitor data
function updateVisitCounter() {
    // Check if the 'visitorData' already exists in localStorage
    let visitorData = JSON.parse(localStorage.getItem('visitorData'));

    // If data doesn't exist, it's the first visit
    if (!visitorData) {
        // Initialize visitor data for first-time visitors
        visitorData = {
            visitCount: 1,
            firstVisitDate: new Date().toLocaleString(),
            lastVisitDate: new Date().toLocaleString()
        };

        // Store the new visitor data in localStorage
        localStorage.setItem('visitorData', JSON.stringify(visitorData));

        // Display a welcome message for first-time visitors
        document.getElementById('visitorInfo').textContent = `Welcome! This is your first visit on ${visitorData.firstVisitDate}.`;
    } else {
        // If visitor data exists, increment the visit count and update the last visit date
        visitorData.visitCount++;
        visitorData.lastVisitDate = new Date().toLocaleString();

        // Store updated visitor data in localStorage
        localStorage.setItem('visitorData', JSON.stringify(visitorData));

        // Display information about the previous visit
        document.getElementById('visitorInfo').textContent = `You have visited ${visitorData.visitCount} times. Last visit was on ${visitorData.lastVisitDate}.`;
    }

    // Also update the visit count in the "count" span element
    document.getElementById('count').textContent = visitorData.visitCount;
}

// Call the function on page load
window.onload = updateVisitCounter;


// Call the function on page load
window.onload = updateVisitCounter;

