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