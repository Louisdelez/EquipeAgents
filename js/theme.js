// --- Theme toggle (dark/light) ---

(function () {
    const toggle = document.getElementById('themeToggle');
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (prefersDark ? 'dark' : 'light');

    applyTheme(initial);

    toggle.addEventListener('click', () => {
        const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        localStorage.setItem('theme', next);
    });

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const icon = theme === 'dark' ? 'sun' : 'moon';
        toggle.innerHTML = `<i data-lucide="${icon}"></i>`;
        lucide.createIcons();
    }
})();
