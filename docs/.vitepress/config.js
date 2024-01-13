export default {
  title: "Promptate",
  description: "更好地编写和优化Prompt",

  // 主题相关配置
  themeConfig: {
    logo: "/logo.svg",
    nav: [{ text: "Gitee", link: "https://gitee.com/ultrav/promptate" }],
    sidebar: [
        {
          text: '提示工程简介',
          items: [
            { text: '简介', link: '/introduction/intro' },
            { text: '基础', link: '/introduction/basics' },
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
