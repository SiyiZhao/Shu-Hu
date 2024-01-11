import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Shu-Hu",
  description: "Learn and think about the Universe!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.jpeg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Notes', link: '/Notes/index' },
      { text: 'Essays', link:'/Essays/index'}
    ],

    sidebar: [
      {
        text: 'Notes', link: '/Notes/index',
        items: [
          { text: 'little h', link: '/Notes/little_h' }
        ]
      },
      {
        text: 'Essays', link: '/Essays/index'
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SiyiZhao' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Siyi Zhao'
    }
  },

  markdown: {
    math: true
  },

  base: '/blog/'
})
