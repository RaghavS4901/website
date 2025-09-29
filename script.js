```javascript
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form validation for the contact form
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        const nameInput = contactForm.querySelector('.form-input[type="text"]');
        const emailInput = contactForm.querySelector('.form-input[type="email"]');
        const messageInput = contactForm.querySelector('.form-textarea');

        let valid = true;

        if (!nameInput.value) {
            valid = false;
            alert("Please enter your name.");
        }
        if (!emailInput.value || !emailInput.validity.valid) {
            valid = false;
            alert("Please enter a valid email address.");
        }
        if (!messageInput.value) {
            valid = false;
            alert("Please enter your message.");
        }

        if (!valid) {
            e.preventDefault();
        }
    });

    // Animation to fade in sections on scroll
    const sections = document.querySelectorAll('section');

    const fadeInOnScroll = () => {
        sections.forEach(section => {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (sectionPosition < screenPosition) {
                section.classList.add('fade-in');
            }
        });
    };

    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); // Initial check
});
```