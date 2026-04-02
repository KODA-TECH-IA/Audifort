// Audifort Presell - Interactivity

document.addEventListener('DOMContentLoaded', () => {
    // --- Scroll Reveal Logic ---
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    };
    
    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => revealObserver.observe(el));

    // --- FAQ Accordion Logic (Failsafe Event Delegation) ---
    document.addEventListener('click', (e) => {
        const question = e.target.closest('.faq-question');
        if (!question) return;

        const item = question.closest('.faq-item');
        if (!item) return;

        console.log('FAQ Clicked via Delegation');
        const isOpen = item.classList.contains('active');
        const allItems = document.querySelectorAll('.faq-item');

        // Close all items
        allItems.forEach(i => {
            i.classList.remove('active');
            const icon = i.querySelector('.faq-toggle-icon');
            if (icon) icon.textContent = '+';
        });

        // Toggle current item
        if (!isOpen) {
            item.classList.add('active');
            const icon = item.querySelector('.faq-toggle-icon');
            if (icon) icon.textContent = '-';
        }
    });

    // --- Smooth Scrolling for CTA links ---
    const ctaLinks = document.querySelectorAll('a[href^="#"]');
    
    ctaLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
