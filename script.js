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
        navLinks.style.border = '2px solid #ff0000';
    }
});

// فتح التيليجرام
function openTelegram(event) {
    event.preventDefault();
    
    const telegramLink = 'tg://openmessage?user_id=8303099506';
    
    window.location.href = telegramLink;
    
    setTimeout(function() {
        window.open('https://t.me/Ghost', '_blank');
    }, 500);
}

// نظام حماية عالي (Anti-hacking)
(function() {
    // منع حفظ الصفحة
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
    
    // منع اختصار Ctrl+S (حفظ)
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && (e.key === 's' || e.key === 'S')) {
            e.preventDefault();
            return false;
        }
        
        // منع F12 و Ctrl+Shift+I (أدوات المطور)
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
            e.preventDefault();
            return false;
        }
        
        // منع Ctrl+U (عرض المصدر)
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
            return false;
        }
    });
    
    // كشف أدوات المطور
    setInterval(function() {
        const start = performance.now();
        debugger; // هذا يبطئ أدوات المطور
        const end = performance.now();
        
        if (end - start > 100) {
            // إذا كان هناك تأخير، يعني أدوات المطور مفتوحة
            document.body.innerHTML = '<h1 style="color:red;text-align:center;margin-top:50px;">🚫 أدوات المطور ممنوعة!</h1>';
        }
    }, 1000);
    
    // إخفاء الكود المصدري
    console.log('%c⚠️  محمي بواسطة Ghost', 'color: red; font-size: 20px; font-weight: bold;');
    console.log('%c🔒 لا يمكنك رؤية الكود', 'color: white; font-size: 16px;');
})();

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

// تأثيرات عند التحميل
window.addEventListener('load', function() {
    console.log('👻 Death Note | Ghost');
    
    // تحقق من الجهاز
    const deviceId = localStorage.getItem('ghost_device_id');
    if (!deviceId) {
        // إنشاء معرف فريد للجهاز
        const newDeviceId = 'DEV-' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('ghost_device_id', newDeviceId);
    }
});
