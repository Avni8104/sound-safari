// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
}
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
});
// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            if (this.classList.contains('nav-link')) {
                this.classList.add('active');
            }
        }
    });
});

// Animate Elements on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.portfolio-item, .about-content, .service-card, .contact-container, .cv-section, .cv-item');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (elementPosition < screenPosition) {
            element.classList.add('visible');
            if (element.querySelector('.progress-bar')) {
                const progressBars = element.querySelectorAll('.progress-bar');
                progressBars.forEach(bar => {
                    const width = bar.getAttribute('data-progress');
                    bar.style.width = width;
                });
            }
        }
    });
};
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Portfolio Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filter = button.getAttribute('data-filter');
        portfolioItems.forEach(item => {
            item.style.display = (filter === 'all' || item.getAttribute('data-category') === filter) ? 'block' : 'none';
        });
    });
});
// Email
function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_79y85io","template_bh3gk76",parms)
}
//Contact Form Validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name) {
            alert('Please enter your name.');
            return;
        }
        if (!email || !emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        if (!message) {
            alert('Please enter your message.');
            return;
        }

        alert('Thank you for your message! I will get back to you within 24 hours.');
        this.reset();
    });
}

// CV Download Placeholder
const downloadCV = (e) => {
    e.preventDefault();
    alert('CV download started! In a real implementation, this would download your PDF.');
};
document.getElementById('downloadCV').addEventListener('click', downloadCV);
document.getElementById('downloadCV2').addEventListener('click', downloadCV);

// Dynamic Background Animation
const dynamicBg = document.getElementById('dynamicBg');
if (dynamicBg) {
    const particleCount = 15;
    const shapeCount = 5;

    // Create Particles
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('span');
        particle.classList.add('particle');
        const size = Math.random() * 50 + 20;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * -20;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        dynamicBg.appendChild(particle);
    }

    // Create Floating Shapes
    for (let i = 0; i < shapeCount; i++) {
        const shape = document.createElement('span');
        shape.classList.add('floating-shape');
        const size = Math.random() * 100 + 50;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 30 + 15;
        const delay = Math.random() * -20;
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        shape.style.left = `${posX}%`;
        shape.style.top = `${posY}%`;
        shape.style.animationDuration = `${duration}s`;
        shape.style.animationDelay = `${delay}s`;
        shape.style.background = `radial-gradient(circle, var(--primary), var(--accent))`;
        dynamicBg.appendChild(shape);
    }
}

// Back to Top Button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});