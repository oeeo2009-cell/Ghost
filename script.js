// قائمة الجوال
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
        navLinks.style.border = '1px solid #333';
    }
});

// التحقق من الكود
function checkCode() {
    const code = document.getElementById('access-code').value;
    
    // هنا تحط الأكواد اللي تريدها (تعدلها براحتك)
    const validCodes = [
        'GHOST-001-DEATH',
        'GHOST-002-NOTE',
        'GHOST-003-LIGHT',
        'GHOST-004-KIRA',
        'GHOST-005-LAW',
        'ADMIN-KEY-2009',
        'SPECIAL-ACCESS',
        'GHOST009967,
        'videill',
        'DEAT9-NOTE-10'
    ];
    
    if (validCodes.includes(code)) {
        // كود صحيح
        document.getElementById('code-entry').style.display = 'none';
        document.getElementById('paid-files').style.display = 'block';
        
        // حفظ في localStorage عشان ما يحتاج كل مرة
        localStorage.setItem('deathnote_access', code);
        
        // رسالة نجاح
        alert('✅ كود صحيح! مرحباً بك في القسم المدفوع');
    } else {
        // كود خطأ
        alert('❌ كود خطأ! إذا ما عندك كود، راسلني عالتيليجرام');
    }
}

// التحقق عند تحميل الصفحة (إذا كان مسجل دخول مسبقاً)
window.addEventListener('load', function() {
    const savedCode = localStorage.getItem('deathnote_access');
    if (savedCode) {
        // التحقق من الكود المخزن (اختياري)
        document.getElementById('code-entry').style.display = 'none';
        document.getElementById('paid-files').style.display = 'block';
    }
});

// فتح التيليجرام
function openTelegram(event) {
    event.preventDefault();
    
    const telegramLink = 'tg://openmessage?user_id=8303099506';
    
    window.location.href = telegramLink;
    
    setTimeout(function() {
        window.open('https://t.me/m50cl', '_blank');
    }, 500);
}

// منع النسخ
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// منع F12
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
    }
});

// التنقل النشط
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

// تأثيرات التحميل
window.addEventListener('load', function() {
    console.log('👻 Death Note | Ghost');
});
