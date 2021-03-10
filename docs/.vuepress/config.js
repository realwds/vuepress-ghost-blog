module.exports = {
  title: 'realwds\'blog',
  description: 'Ghosts default theme for Vuepress',
  base: '/vuepress-blog/',
  theme: 'casper',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  markdown: {
    anchor: {
      permalink: false,
      permalinkBefore: false
    }
  },
  themeConfig: {
    cover: '/images/cover.jpg',
    logo: '/images/logo.png',
    nav: [{
      text: '首页',
      link: '/'
    }, {
      text: '随笔',
      link: '/posts'
    }, {
      text: '媒体',
      link: '/media'
    }, {
      text: '关于',
      link: '/about'
    }],

    footer: [{
      text: 'Latest Posts',
      link: '/posts'
    }, {
      text: 'Facebook',
      link: 'https://facebook.com/'
    }, {
      text: 'Twitter',
      link: 'https://twitter.com'
    }, {
      text: 'Github',
      link: 'https://github.com/'
    }],
    social: {
      github: 'https://github.com',
      twitter: 'https://twitter.com'
    }
  }
}