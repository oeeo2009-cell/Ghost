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

function checkCode() {
    const code = document.getElementById('access-code').value;
    const correctCode = 'Ghost-THE-L-Best';
    
    if (code === correctCode) {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('paid-content').style.display = 'block';
        
        // تأثير دخول L
        const reveal = document.querySelector('.l-reveal');
        reveal.style.animation = 'revealPulse 1s';
    } else {
        alert('❌ كود خطأ! الكود موجود في قناة @m50cl للأعضاء المدفوعين');
    }
}

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
    
    // تأثير L عند التحميل
    const lElements = document.querySelectorAll('.l-left, .l-right');
    lElements.forEach(el => {
        el.style.opacity = '0';
        setTimeout(() => {
            el.style.transition = 'opacity 3s';
            el.style.opacity = '0.1';
        }, 1000);
    });
});
