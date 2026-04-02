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

    // --- FAQ Accordion Logic ---
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');

            // Close all items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
                const otherIcon = faqItem.querySelector('.faq-toggle-icon');
                if (otherIcon) otherIcon.textContent = '+';
            });

            // If it wasn't open, open it
            if (!isOpen) {
                item.classList.add('active');
                const icon = item.querySelector('.faq-toggle-icon');
                if (icon) icon.textContent = '-';
            }
        });
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
