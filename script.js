```javascript
// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form validation for the contact form
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(event) {
    const name = contactForm.querySelector('.input-field[type="text"]');
    const email = contactForm.querySelector('.input-field[type="email"]');
    const message = contactForm.querySelector('.input-field[type="textarea"]');

    let valid = true;

    if (!name.value) {
        valid = false;
        name.classList.add('error');
    } else {
        name.classList.remove('error');
    }

    if (!email.value || !email.validity.valid) {
        valid = false;
        email.classList.add('error');
    } else {
        email.classList.remove('error');
    }

    if (!message.value) {
        valid = false;
        message.classList.add('error');
    } else {
        message.classList.remove('error');
    }

    if (!valid) {
        event.preventDefault();
    }
});

// Animations for hero section and feature cards
const heroSection = document.querySelector('.hero-section');
const featureCards = document.querySelectorAll('.feature-card');

const options = {
    root: null,
    threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, options);

// Observe hero section
observer.observe(heroSection);

// Observe feature cards
featureCards.forEach(card => {
    observer.observe(card);
});
```