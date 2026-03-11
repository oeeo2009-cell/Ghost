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
        navLinks.style.border = '2px solid #fff';
    }
});

// 🗝️ 10 مفاتيح عشوائية شغالة 100%
const validCodes = [
    'GHOST-L-NOTE-001',
    'DEATH-APPLE-002',
    'KIRA-LIGHT-003',
    'L-LAWLIET-004',
    'RYUK-APPLE-005',
    'NOTE-DEATH-006',
    'SHINIGAMI-007',
    'LIGHT-YAGAMI-008',
    'MISA-MISA-009',
    'NEAR-MELLO-010'
];

// التحقق من الكود
function checkCode() {
    const code = document.getElementById('access-code').value.trim();
    
    if (validCodes.includes(code)) {
        // كود صحيح
        document.getElementById('code-entry').style.display = 'none';
        document.getElementById('paid-files').style.display = 'block';
        
        // حفظ في localStorage
        localStorage.setItem('deathnote_access', code);
        
        // رسالة نجاح متحركة
        showMessage('✅ كود صحيح! مرحباً بك', 'success');
    } else {
        // كود خطأ
        showMessage('❌ كود خطأ! راسلني عالتيليجرام', 'error');
    }
}

// دالة عرض الرسائل
function showMessage(text, type) {
    const msgDiv = document.createElement('div');
    msgDiv.textContent = text;
    msgDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: ${type === 'success' ? '#000' : '#ff0000'};
        color: #fff;
        padding: 20px 40px;
        border-radius: 15px;
        font-size: 20px;
        font-weight: bold;
        border: 2px solid #fff;
        z-index: 9999;
        animation: msgFade 2s forwards;
    `;
    document.body.appendChild(msgDiv);
    
    setTimeout(() => {
        msgDiv.remove();
    }, 2000);
}

// التحقق عند تحميل الصفحة
window.addEventListener('load', function() {
    console.log('👻 Death Note | Ghost - المفاتيح جاهزة');
    
    const savedCode = localStorage.getItem('deathnote_access');
    if (savedCode && validCodes.includes(savedCode)) {
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

// منع F12 وأدوات المطور
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J') ||
        (e.ctrlKey && e.key === 'u')) {
        e.preventDefault();
    }
});

// كشف أدوات المطور
setInterval(function() {
    const start = performance.now();
    debugger;
    const end = performance.now();
    
    if (end - start > 100) {
        document.body.innerHTML = '<h1 style="color:red;text-align:center;margin-top:50px;">🚫 أدوات المطور ممنوعة!</h1>';
    }
}, 2000);

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

// تأثيرات إضافية عند التحميل
window.addEventListener('load', function() {
    // إضافة حركة للمفاتيح المخزنة
    console.log('🔥 10 مفاتيح جاهزة للاستخدام');
});
