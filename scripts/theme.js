// Theme Management
const ThemeManager = {
    init() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        this.apply(savedTheme);
    },

    toggle() {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.apply(newTheme);
        localStorage.setItem('theme', newTheme);
    },

    apply(theme) {
        document.body.setAttribute('data-theme', theme);
        document.getElementById('lightIcon').classList.toggle('hidden', theme === 'dark');
        document.getElementById('darkIcon').classList.toggle('hidden', theme === 'light');
        const menuIcon = document.getElementById('menuIcon');
        if (menuIcon) {
            menuIcon.classList.toggle('invert', theme === 'dark');
        }
    }
};
