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

// Function to update and display the visit counter
function updateVisitCounter() {
    // Get the current count from localStorage, or initialize it to 0 if not found
    let visitCount = localStorage.getItem('visitCount');
    
    // If visitCount is null or not a number, initialize to 0
    visitCount = visitCount ? parseInt(visitCount, 10) : 0;

    // Increment the visit count
    visitCount++;

    // Update the count in localStorage (so it persists across sessions)
    localStorage.setItem('visitCount', visitCount);

    // Display the count in the element with id="count"
    document.getElementById('count').textContent = `Number of visits: ${visitCount}`;
}

// Call the function on page load
window.onload = updateVisitCounter;
