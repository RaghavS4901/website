```javascript
// JavaScript for interactive features

// Function to smoothly scroll to anchor links
function smoothScroll(evt) {
    evt.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
    }
}

// Attach event listeners to anchor links for smooth scrolling
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(link => {
    link.addEventListener("click", smoothScroll);
});

// Function to animate elements into view using Intersection Observer
function animateOnScroll(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view'); // Adding 'in-view' class triggers CSS animations
            observer.unobserve(entry.target); // Stop observing once the element is in view
        }
    });
}

// Set up the Intersection Observer
const observerOptions = {
    root: null, // Use the viewport as the container
    threshold: 0.1 // Trigger when 10% of the element is visible
};
const observer = new IntersectionObserver(animateOnScroll, observerOptions);

// Observe each service card for animations
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    observer.observe(card);
});

// Custom cursor effect
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
});

const btns = document.querySelectorAll('.btn-primary, .btn-secondary');

btns.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        cursor.classList.add('hover'); // Change cursor style on hover
    });
    btn.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover'); // Reset cursor style on leave
    });
    btn.addEventListener('click', () => {
        cursor.classList.add('click'); // Change cursor style on click
        setTimeout(() => cursor.classList.remove('click'), 500); // Reset after a short time
    });
});

// CSS styles for the custom cursor (you may need to define these in your CSS)
const style = document.createElement('style');
style.textContent = `
    .custom-cursor {
        position: fixed;
        width: 20px;
        height: 20px;
        background: red; /* Change according to your design */
        border-radius: 50%;
        pointer-events: none;
        transform: translate(-50%, -50%);
        transition: background 0.3s, transform 0.2s;
        z-index: 1000; /* Ensure it appears above other elements */
    }
    .custom-cursor.hover {
        background: blue; /* Change color on hover */
        transform: scale(1.5) translate(-50%, -50%);
    }
    .custom-cursor.click {
        transform: scale(0.8); /* Scale down on click */
    }
`;
document.head.appendChild(style);
```