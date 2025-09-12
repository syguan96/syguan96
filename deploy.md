# 部署指南

## 🚀 GitHub Pages 部署

### 步骤1: 创建GitHub仓库

1. 登录GitHub
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 仓库名称建议使用: `yourname.github.io` (这样可以直接通过 `https://yourname.github.io` 访问)
4. 选择 "Public" 可见性
5. 点击 "Create repository"

### 步骤2: 上传代码

#### 方法1: 使用Git命令行

```bash
# 初始化Git仓库
git init

# 添加远程仓库
git remote add origin https://github.com/yourusername/yourname.github.io.git

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit: Academic personal homepage"

# 推送到GitHub
git push -u origin main
```

#### 方法2: 使用GitHub Desktop

1. 下载并安装 [GitHub Desktop](https://desktop.github.com/)
2. 登录你的GitHub账户
3. 选择 "Clone a repository from the Internet"
4. 选择刚创建的仓库
5. 将项目文件复制到本地仓库文件夹
6. 在GitHub Desktop中提交并推送更改

#### 方法3: 直接上传文件

1. 在GitHub仓库页面点击 "uploading an existing file"
2. 拖拽或选择项目文件上传
3. 添加提交信息并提交

### 步骤3: 启用GitHub Pages

1. 进入仓库设置页面 (Settings)
2. 滚动到 "Pages" 部分
3. 在 "Source" 下选择 "Deploy from a branch"
4. 选择 "main" 分支和 "/ (root)" 文件夹
5. 点击 "Save"
6. 等待几分钟，GitHub会生成你的网站链接

### 步骤4: 访问你的网站

- 如果仓库名是 `yourname.github.io`，访问: `https://yourname.github.io`
- 如果仓库名是其他名称，访问: `https://yourname.github.io/repository-name`

## 🌐 自定义域名部署

### 步骤1: 购买域名

推荐域名注册商:
- [Namecheap](https://www.namecheap.com/)
- [GoDaddy](https://www.godaddy.com/)
- [阿里云](https://www.aliyun.com/)

### 步骤2: 配置DNS

1. 在域名注册商处添加CNAME记录:
   - 类型: CNAME
   - 名称: www
   - 值: yourusername.github.io

2. 添加A记录指向GitHub Pages IP:
   - 类型: A
   - 名称: @
   - 值: 185.199.108.153
   - 值: 185.199.109.153
   - 值: 185.199.110.153
   - 值: 185.199.111.153

### 步骤3: 创建CNAME文件

1. 在项目根目录创建 `CNAME` 文件
2. 在文件中写入你的域名 (例如: `www.yourname.com`)
3. 提交并推送到GitHub

### 步骤4: 更新GitHub Pages设置

1. 在仓库设置中，找到 "Pages" 部分
2. 在 "Custom domain" 字段输入你的域名
3. 勾选 "Enforce HTTPS"

## 🔧 其他部署选项

### Netlify部署

1. 访问 [Netlify](https://www.netlify.com/)
2. 注册账户并连接GitHub
3. 选择你的仓库
4. 配置构建设置 (通常不需要)
5. 点击 "Deploy site"

### Vercel部署

1. 访问 [Vercel](https://vercel.com/)
2. 注册账户并连接GitHub
3. 导入你的仓库
4. 点击 "Deploy"

### 传统Web服务器

1. 将项目文件上传到Web服务器
2. 确保 `index.html` 在根目录
3. 配置服务器支持SPA (单页应用)

## 📱 移动端优化

部署后，建议测试移动端显示效果:

1. 使用浏览器开发者工具模拟移动设备
2. 在实际手机上访问网站
3. 检查响应式布局是否正常

## 🔍 SEO优化

### 添加Meta标签

在 `index.html` 的 `<head>` 部分添加:

```html
<meta name="description" content="你的姓名 - 计算机科学博士，人工智能研究员">
<meta name="keywords" content="人工智能,机器学习,深度学习,计算机视觉">
<meta name="author" content="你的姓名">

<!-- Open Graph标签 -->
<meta property="og:title" content="你的姓名 - 学术个人主页">
<meta property="og:description" content="计算机科学博士，人工智能研究员">
<meta property="og:image" content="你的照片URL">
<meta property="og:url" content="https://yourname.github.io">

<!-- Twitter Card标签 -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="你的姓名 - 学术个人主页">
<meta name="twitter:description" content="计算机科学博士，人工智能研究员">
<meta name="twitter:image" content="你的照片URL">
```

### 添加结构化数据

在 `index.html` 的 `<head>` 部分添加:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "你的姓名",
  "jobTitle": "计算机科学博士",
  "worksFor": {
    "@type": "Organization",
    "name": "某某大学"
  },
  "email": "your.email@university.edu",
  "url": "https://yourname.github.io"
}
</script>
```

## 🚨 常见问题

### Q: 网站显示空白页面
A: 检查文件路径是否正确，确保 `index.html` 在根目录

### Q: CSS样式没有加载
A: 检查 `styles.css` 文件路径，确保文件存在且路径正确

### Q: 图片不显示
A: 检查图片URL是否正确，建议使用相对路径或CDN链接

### Q: GitHub Pages部署失败
A: 检查仓库是否为公开，文件是否在正确分支

### Q: 自定义域名不工作
A: 检查DNS设置，等待DNS传播 (通常需要24-48小时)

## 📞 技术支持

如果遇到部署问题，可以:

1. 查看GitHub Pages文档
2. 在GitHub上提交Issue
3. 联系项目维护者

---

**部署完成后，记得更新README.md中的链接地址！** 🎉
