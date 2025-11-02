document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 语言切换功能
    const langZhBtn = document.getElementById('lang-zh');
    const langEnBtn = document.getElementById('lang-en');

    // 检查本地存储中的语言偏好
    if (localStorage.getItem('language') === 'en') {
        setLanguage('en');
    } else {
        setLanguage('zh');
    }

    if (langZhBtn && langEnBtn) {
        langZhBtn.addEventListener('click', () => setLanguage('zh'));
        langEnBtn.addEventListener('click', () => setLanguage('en'));
    }

    function setLanguage(lang) {
        if (lang === 'en') {
            document.body.classList.add('en');
            if (langEnBtn) langEnBtn.classList.add('active');
            if (langZhBtn) langZhBtn.classList.remove('active');
        } else {
            document.body.classList.remove('en');
            if (langZhBtn) langZhBtn.classList.add('active');
            if (langEnBtn) langEnBtn.classList.remove('active');
        }
        // 保存语言偏好
        localStorage.setItem('language', lang);
    }

    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
});