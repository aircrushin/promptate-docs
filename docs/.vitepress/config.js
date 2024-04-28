export default {
  title: "Promptate",
  description: "更好地编写和优化Prompt",
  base: '/promptate-docs/',
  cleanUrls:true,
  // 主题相关配置
  themeConfig: {
    logo: "/logo.png",
    nav: [{ text: "Gitee", link: "https://gitee.com/ultrav/promptate" }],
    sidebar: [
        {
          text: '提示工程简介',
          items: [
            { text: '简介', link: '/introduction/intro' },
            { text: '基本概念', link: '/introduction/basics' },
            { text: '模型设置', link: '/introduction/settings' },
            { text: '提示词要素', link: '/introduction/elements' },
            { text: '提示词示例', link: '/introduction/tips' },
          ]
        },
        {
          text: '工作区',
          items: [
            { text: '介绍', link: '/workspace/index' },
            { text: '快速上手', link: '/workspace/startup' },
            { text: '聊天机器人', link: '/workspace/chatbot' },
            { text: '优化与翻译', link: '/workspace/optimize' },
            { text: '效果测试', link: '/workspace/test' }, 
          ]
        },
        {
          text: '生成器',
          items: [
            { text: '介绍', link: '/generator/index' },
            { text: 'ChatGPT', link: '/generator/chatgpt' },
            { text: 'MidJourney', link: '/generator/midjourney' },
          ]
        },
        {
          text: '社区',
          items: [
            { text: '介绍', link: '/community/index' }, 
            { text: '分享提示词', link: '/community/share' }, 
          ]
        },
      ]
  },
};
