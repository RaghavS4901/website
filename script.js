```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Centralign.ai - Your autonomous AI COO for on-demand solutions.">
    <title>Centralign.ai | Autonomous AI COO</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="header">
        <nav class="navbar">
            <div class="logo">Centralign.ai</div>
            <ul class="nav-links">
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div class="menu-toggle" aria-label="Toggle navigation">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
        </nav>
        <div class="hero">
            <h1>Your Autonomous AI COO</h1>
            <p>Get anything made on demand.</p>
            <a href="#contact" class="cta-button">Get Started</a>
        </div>
    </header>

    <main>
        <section id="services" class="services">
            <h2>Our Services</h2>
            <div class="service-list">
                <div class="service-item">
                    <h3>AI Strategy</h3>
                    <p>Optimize your business operations with tailored AI solutions.</p>
                </div>
                <div class="service-item">
                    <h3>On-Demand Solutions</h3>
                    <p>Access customized services that align with your needs.</p>
                </div>
                <div class="service-item">
                    <h3>Data Analytics</h3>
                    <p>Transform data into actionable insights for informed decision-making.</p>
                </div>
            </div>
        </section>

        <section id="about" class="about">
            <h2>About Us</h2>
            <p>At Centralign.ai, we leverage cutting-edge AI technology to enhance your business capabilities and deliver exceptional value.</p>
        </section>

        <section id="contact" class="contact">
            <h2>Contact Us</h2>
            <form id="contact-form" aria-label="Contact form">
                <input type="text" id="name" name="name" required placeholder="Your Name" aria-required="true">
                <input type="email" id="email" name="email" required placeholder="Your Email" aria-required="true">
                <textarea id="message" name="message" required placeholder="Your Message" aria-required="true"></textarea>
                <button type="submit" class="submit-button">Send Message</button>
            </form>
        </section>
    </main>

    <footer class="footer">
        <p>&copy; 2023 Centralign.ai. All Rights Reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

```css
/* style.css */
:root {
    --deep-blue: #003366;
    --crisp-white: #FFFFFF;
    --teal: #008080;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: var(--crisp-white);
    color: var(--deep-blue);
    line-height: 1.6;
}

.header {
    background: var(--deep-blue);
    color: var(--crisp-white);
    padding: 20px;
    position: relative;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
}

.nav-links a {
    color: var(--crisp-white);
    text-decoration: none;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: var(--teal);
}

.menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.bar {
    height: 3px;
    width: 25px;
    background-color: var(--crisp-white);
    margin: 3px 0;
}

.hero {
    text-align: center;
    padding: 80px 20px;
}

.cta-button {
    background-color: var(--teal);
    color: var(--crisp-white);
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s;
}

.cta-button:hover {
    background-color: darken(var(--teal), 10%);
}

.services, .about, .contact {
    padding: 40px 20px;
    text-align: center;
}

.service-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.service-item {
    background: var(--crisp-white);
    border: 1px solid var(--teal);
    border-radius: 5px;
    padding: 20px;
    transition: transform 0.3s;
}

.service-item:hover {
    transform: translateY(-5px);
}

.contact form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.contact input, .contact textarea {
    padding: 10px;
    border: 1px solid var(--deep-blue);
    border-radius: 5px;
}

.submit-button {
    background: var(--teal);
    color: var(--crisp-white);
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
}

.submit-button:hover {
    background: darken(var(--teal), 10%);
}

.footer {
    text-align: center;
    padding: 20px;
    background: var(--deep-blue);
    color: var(--crisp-white);
}

@media (max-width: 768px) {
    .nav-links {
        display: none;
    }

    .menu-toggle {
        display: flex;
    }

    .navbar.active .nav-links {
        display: flex;
        flex-direction: column;
        position: absolute;
        background: var(--deep-blue);
        width: 100%;
        left: 0;
        top: 60px;
    }
}
```

```javascript
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(form);
        const message = `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\nMessage: ${formData.get('message')}`;
        alert(`Message Sent:\n${message}`);
        form.reset();
    });
});
```