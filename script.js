// 示例：页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 1. 平滑滚动（点击导航跳转到对应区域时使用）
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. 未来可添加其他交互，比如：
    // - 项目卡片悬停效果
    // - 深色/浅色模式切换
    // - 动态加载更多内容
});



document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 语言切换功能
    const langZhBtn = document.getElementById('lang-zh');
    const langEnBtn = document.getElementById('lang-en');
    const htmlElement = document.documentElement;

    // 检查本地存储中的语言偏好
    if (localStorage.getItem('language') === 'en') {
        setLanguage('en');
    } else {
        setLanguage('zh');
    }

    langZhBtn.addEventListener('click', () => setLanguage('zh'));
    langEnBtn.addEventListener('click', () => setLanguage('en'));

    function setLanguage(lang) {
        if (lang === 'en') {
            document.body.classList.add('en');
            langEnBtn.classList.add('active');
            langZhBtn.classList.remove('active');
        } else {
            document.body.classList.remove('en');
            langZhBtn.classList.add('active');
            langEnBtn.classList.remove('active');
        }
        // 保存语言偏好
        localStorage.setItem('language', lang);
    }
});