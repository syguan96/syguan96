// 简洁版学术个人主页JavaScript功能

document.addEventListener('DOMContentLoaded', function() {
    // 发表论文链接处理 - 现在使用真实链接，不需要阻止默认行为
    const publicationLinks = document.querySelectorAll('.link');
    
    publicationLinks.forEach(link => {
        // 检查链接是否有有效的href属性
        if (link.href && link.href !== '#') {
            // 如果有有效链接，让浏览器正常处理
            link.target = '_blank'; // 在新标签页打开
        } else {
            // 如果没有有效链接，添加点击事件
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const linkText = this.textContent.toLowerCase();
                
                if (linkText.includes('pdf')) {
                    console.log('PDF链接被点击');
                    // 可以在这里添加实际的PDF链接
                } else if (linkText.includes('website')) {
                    console.log('项目网站链接被点击');
                } else if (linkText.includes('code')) {
                    console.log('代码链接被点击');
                }
            });
        }
    });

    // GitHub链接处理
    const githubLink = document.querySelector('.scholar-link');
    if (githubLink && githubLink.href && githubLink.href !== '#') {
        githubLink.target = '_blank'; // 在新标签页打开
    }
});