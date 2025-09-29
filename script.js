```javascript
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const loader = document.querySelector('.loader');
    const scrollToTopButton = document.querySelector('.scroll-to-top');

    // Show loader until the page is fully loaded
    window.addEventListener('load', () => {
        loader.style.display = 'none';
    });

    // Smooth scrolling for navigation links
    const smoothScroll = (target) => {
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    navbar.addEventListener('click', (e) => {
        if (e.target.matches('a')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href');
            smoothScroll(targetId);
        }
    });

    // Highlight active section on scroll
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbar.offsetHeight;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const currentId = section.getAttribute('id');
                navbar.querySelectorAll('a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });

        // Show scroll to top button
        if (scrollPosition > 500) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // Smooth scroll to top
    scrollToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Responsive interaction - adjust navbar on resize
    window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
            navbar.classList.add('mobile');
        } else {
            navbar.classList.remove('mobile');
        }
    });

    // Error handling for smooth scrolling
    const handleError = (error) => {
        console.error('An error occurred:', error);
        alert('Unable to smooth scroll. Please try again.');
    };

    try {
        // Attempt to initialize smooth scroll
        smoothScroll('#home');
    } catch (error) {
        handleError(error);
    }
});
```