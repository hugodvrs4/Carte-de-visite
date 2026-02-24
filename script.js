// Détection des modules Webflow (JS et touch)
(function (root, doc) {
    const html = doc.documentElement;
    html.className += ' w-mod-js';
    if ('ontouchstart' in root || (root.DocumentTouch && doc instanceof DocumentTouch)) {
        html.className += ' w-mod-touch';
    }
})(window, document);

document.addEventListener('DOMContentLoaded', function () {

    // Animation d'apparition au scroll
    function initScrollAnimations() {
        const elements = document.querySelectorAll('.card, .ix_sticky-card, section');

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.replace('hidden', 'visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        elements.forEach(el => {
            el.classList.add('hidden');
            observer.observe(el);
        });
    }

    // Smooth scroll vers #contact avec relance de l'animation
    function initSmoothScroll() {
        document.querySelectorAll('a[href="#contact"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const target = document.querySelector('#contact');
                if (!target) return;

                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });

                // Relance l'animation d'apparition
                target.classList.replace('visible', 'hidden');
                setTimeout(() => target.classList.replace('hidden', 'visible'), 10);
            });
        });
    }

    // Backdrop blur sur les cartes flottantes
    function initBackdropBlur() {
        document.querySelectorAll('.ix_backdrop-filter-blur').forEach(el => {
            el.style.backdropFilter = 'blur(8px)';
            el.style.webkitBackdropFilter = 'blur(8px)';
        });
    }

    initScrollAnimations();
    initSmoothScroll();
    initBackdropBlur();
});