export default {
  title: "Promptate",
  description: "更好地编写和优化Prompt",
  base: '/promptate-docs/',
  cleanUrls:true,
  // 主题相关配置
  themeConfig: {
    logo: "/logo.svg",
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
          text: 'Section Title B',
          items: [
            { text: 'Item C', link: '/item-c' },
            { text: 'Item D', link: '/item-d' },
          ]
        }
      ]
  },
};
