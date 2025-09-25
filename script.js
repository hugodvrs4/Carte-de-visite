(function(o,c){
    var n=c.documentElement, t=" w-mod-";
    n.className+=t+"js";
    ("ontouchstart" in o || (o.DocumentTouch && c instanceof DocumentTouch)) && (n.className+=t+"touch");
})(window,document);

document.addEventListener('DOMContentLoaded', function() {
    const animatedEls = document.querySelectorAll('.card, .ix_sticky-card, section');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    animatedEls.forEach(el => {
        el.classList.add('hidden');
        observer.observe(el);
    });

    // Smooth scroll
    document.querySelectorAll('a[href="#contact"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector('#contact');
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });

                // Force l'animation même si déjà visible
                target.classList.remove('visible');
                target.classList.add('hidden');
                setTimeout(() => {
                    target.classList.remove('hidden');
                    target.classList.add('visible');
                }, 10);
            }
        });
    });

    // Blur
    document.querySelectorAll('.ix_backdrop-filter-blur').forEach(el => {
        el.style.backdropFilter = 'blur(8px)';
        el.style.webkitBackdropFilter = 'blur(8px)';
    });
});