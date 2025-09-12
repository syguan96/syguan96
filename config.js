// 个人主页配置文件
// 修改这个文件中的信息来快速自定义你的个人主页

const personalConfig = {
    // 基本信息
    name: "你的姓名",
    title: "计算机科学博士 | 人工智能研究员",
    subtitle: "专注于机器学习、深度学习和计算机视觉研究。致力于推动人工智能技术的发展和应用。",
    
    // 联系信息
    contact: {
        email: "your.email@university.edu",
        phone: "+86 138-0000-0000",
        address: "某某大学计算机科学系<br>城市, 省份, 中国",
        location: "某某大学计算机科学系, 城市, 省份, 中国"
    },
    
    // 社交媒体链接
    social: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        twitter: "https://twitter.com/yourusername",
        scholar: "https://scholar.google.com/citations?user=youruserid",
        orcid: "https://orcid.org/0000-0000-0000-0000"
    },
    
    // 个人照片
    profileImage: "https://via.placeholder.com/300x300/4f46e5/ffffff?text=你的照片",
    
    // 统计数据
    stats: {
        experience: 5,
        publications: 20,
        patents: 3,
        presentations: 5
    },
    
    // 技能标签
    skills: [
        "Python", "PyTorch", "TensorFlow", "机器学习", 
        "深度学习", "计算机视觉", "自然语言处理", "数据分析"
    ],
    
    // 研究领域
    researchAreas: [
        {
            icon: "fas fa-brain",
            title: "深度学习",
            description: "专注于神经网络架构设计和优化算法，提高模型的效率和准确性。"
        },
        {
            icon: "fas fa-eye",
            title: "计算机视觉",
            description: "研究图像识别、目标检测和图像生成技术，应用于医疗和自动驾驶领域。"
        },
        {
            icon: "fas fa-language",
            title: "自然语言处理",
            description: "开发语言模型和文本分析算法，提升机器理解和生成自然语言的能力。"
        },
        {
            icon: "fas fa-robot",
            title: "多模态学习",
            description: "结合视觉、文本和语音信息，构建更智能的多模态AI系统。"
        }
    ],
    
    // 发表论文
    publications: [
        {
            year: 2024,
            title: "Deep Learning for Medical Image Analysis: A Comprehensive Survey",
            authors: "你的姓名, 合作者1, 合作者2",
            venue: "Nature Machine Intelligence, 2024",
            links: {
                pdf: "#",
                code: "#",
                cite: "#"
            }
        },
        {
            year: 2023,
            title: "Efficient Neural Architecture Search for Computer Vision Tasks",
            authors: "你的姓名, 合作者1",
            venue: "ICCV 2023",
            links: {
                pdf: "#",
                code: "#",
                cite: "#"
            }
        },
        {
            year: 2023,
            title: "Multi-Modal Learning for Enhanced AI Systems",
            authors: "你的姓名, 合作者1, 合作者2, 合作者3",
            venue: "NeurIPS 2023",
            links: {
                pdf: "#",
                code: "#",
                cite: "#"
            }
        }
    ],
    
    // 关于我的描述
    about: [
        "我是一名计算机科学博士，专注于人工智能和机器学习领域的研究。在过去的几年中，我致力于深度学习算法的开发和应用，特别是在计算机视觉和自然语言处理方面。",
        "我的研究兴趣包括但不限于：神经网络架构设计、模型优化、多模态学习、以及AI在医疗和教育领域的应用。"
    ],
    
    // 主题颜色（可选）
    theme: {
        primary: "#4f46e5",
        secondary: "#7c3aed",
        accent: "#fbbf24",
        text: "#333333",
        background: "#ffffff"
    }
};

// 导出配置供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = personalConfig;
} else {
    window.personalConfig = personalConfig;
}
