// Main menu.js containing all canteens information
const canteensData = [
    {
        id: "canteen5",
        name: "South Indian Canteen",
        description: "South Indian & North Indian",
        timings: "9 AM - 5 PM (except Sunday)",
        path: "./canteens/canteen1/"
    },
    {
        id: "canteen2",
        name: "Juice Corner",
        description: "Juices & Shakes",
        timings: "8 AM - 6 PM",
        path: "./canteens/canteen2/"
    },
    {
        id: "canteen3",
        name: "Snack Shack",
        description: "Fast Food & Snacks",
        timings: "10 AM - 8 PM",
        path: "./canteens/canteen3/"
    }
];

// Function to generate canteen cards on the main page
function generateCanteenCards() {
    const selector = document.getElementById('canteenSelector');
    if (!selector) return;
    
    canteensData.forEach(canteen => {
        const card = document.createElement('div');
        card.className = 'canteen-card';
        card.onclick = () => window.location.href = canteen.path;
        
        card.innerHTML = `
            <h2>${canteen.name}</h2>
            <p>${canteen.description}</p>
            <span class="timing-badge">${canteen.timings}</span>
        `;
        
        selector.appendChild(card);
    });
}

// Initialize canteen cards when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    generateCanteenCards();
});