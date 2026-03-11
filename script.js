document.querySelector('.menu-btn').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.right = '5%';
        navLinks.style.background = '#000';
        navLinks.style.width = '200px';
        navLinks.style.padding = '20px';
        navLinks.style.border = '2px solid #8b0000';
    }
});

function openTelegram(event) {
    event.preventDefault();
    
    const telegramLink = 'tg://openmessage?user_id=8303099506';
    
    window.location.href = telegramLink;
    
    setTimeout(function() {
        window.open('https://t.me/m50cl', '_blank');
    }, 500);
}

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

window.addEventListener('load', function() {
    const title = document.querySelector('.hero-content h1');
    if (title) {
        title.style.opacity = '0';
        setTimeout(() => {
            title.style.transition = 'opacity 2s';
            title.style.opacity = '1';
        }, 500);
    }
});