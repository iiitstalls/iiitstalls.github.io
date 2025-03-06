// Menu Renderer functionality
const MenuRenderer = {
    renderMenu(canteenName, timings, categories) {
        const menuContainer = document.getElementById('menuContainer');
        if (!menuContainer) return;
        
        menuContainer.innerHTML = `
            <div class="menu-header">
                <h2>${canteenName} Menu</h2>
                <span class="timing-badge">${timings}</span>
            </div>
            ${this.generateCategories(categories)}
        `;
        
        // Initialize the category navigator
        CategoryNavigator.init(categories);
    },
    
    generateCategories(categories) {
        return categories.map(category => `
            <div class="category" id="${category.name.toLowerCase().replace(/\s+/g, '-')}">
                <h3>${category.name}</h3>
                <div class="menu-items">
                    ${this.generateMenuItems(category.items)}
                </div>
            </div>
        `).join('');
    },
    
    generateMenuItems(items) {
        return items.map(item => `
            <div class="menu-item">
            <div  class="item-name">
                <span class="${item.type && item.type === "Non-Veg" ? 'non-veg-symbol' : 'veg-symbol'}">• </span>
                <span>${item.name}</span>
            </div>
            <span class="price">₹${item.price}</span>
            </div>
        `).join('');
    }
};

// Setup keyboard navigation
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            window.location.href = '../..';
        }
    });
});