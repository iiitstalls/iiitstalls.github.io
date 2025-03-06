// Main menu.js containing all canteens information
const canteensData = [
    {
        id: "devids",
        name: "Devid's Canteen",
        description: "Late night cravings",
        timings: "6 PM - 2 AM",
        path: "./devids/"
    },
    {
        id: "jc",
        name: "Juice Canteen",
        description: "Juices & Shakes",
        timings: "8 AM - 6 PM",
        path: "./jc/"
    },
    {
        id: "moc",
        name: "Ministry of Cheese",
        description: "Cheese Snacks",
        timings: "2 PM - 9 PM",
        path: "./moc/"
    },
    {
        id: "bbc",
        name: "Basket Ball Canteen",
        description: "Morning Dosas and Maggi",
        timings: "10 AM - 8 PM",
        path: "./bbc/"
    },
    {
        id: "tc",
        name: "Tea Canteen",
        description: "Tea and Drinks",
        timings: "6 PM - 2 AM",
        path: "./tc/"
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