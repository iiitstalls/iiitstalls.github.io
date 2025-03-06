// Category Navigation functionality
const CategoryNavigator = {
    init(categories) {
        this.setupNavigator(categories);
        this.showNavigator();
    },
    
    showNavigator() {
        const navigator = document.getElementById('categoryNavigator');
        if (navigator) {
            navigator.style.display = 'block';
        }
    },

    hideNavigator() {
        const navigator = document.getElementById('categoryNavigator');
        if (navigator) {
            navigator.style.display = 'none';
            navigator.classList.add('collapsed');
        }
    },

    toggle() {
        const pic = document.querySelector('#menuIcon');
        if (pic) {
            pic.src = pic.src.includes('menu-icon') 
                ? 'https://icon-library.com/images/close-icon/close-icon-29.jpg' 
                : 'https://icon-library.com/images/menu-icon/menu-icon-29.jpg';
        }
        
        const navigator = document.getElementById('categoryNavigator');
        if (navigator) {
            navigator.classList.toggle('collapsed');
        }
    },

    setupNavigator(categories) {
        const navList = document.querySelector('.category-nav-list');
        if (!navList) return;
        
        navList.innerHTML = '';
        
        categories.forEach(category => {
            const button = document.createElement('button');
            button.className = 'category-nav-btn';
            button.textContent = category.name;
            button.onclick = () => this.scrollToCategory(category.name);
            navList.appendChild(button);
        });
    },

    scrollToCategory(categoryName) {
        const elementId = categoryName.toLowerCase().replace(/\s+/g, '-');
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
};