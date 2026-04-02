// Audifort Presell - Interactivity

document.addEventListener('DOMContentLoaded', () => {
    // --- Scroll Reveal Logic ---
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    revealElements.forEach(el => revealObserver.observe(el));

    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            e.preventDefault();
            const el = document.querySelector(targetId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// --- FAQ Accordion (runs immediately, outside DOMContentLoaded) ---
document.addEventListener('click', function(e) {
    var question = e.target.closest('.faq-question');
    if (!question) return;

    var item = question.closest('.faq-item');
    if (!item) return;

    var isOpen = item.classList.contains('active');

    // Close all
    document.querySelectorAll('.faq-item').forEach(function(i) {
        i.classList.remove('active');
        var icon = i.querySelector('.faq-toggle-icon');
        if (icon) icon.textContent = '+';
    });

    // Open clicked if it was closed
    if (!isOpen) {
        item.classList.add('active');
        var icon = item.querySelector('.faq-toggle-icon');
        if (icon) icon.textContent = '-';
    }
});
