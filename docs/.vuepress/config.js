const { defaultTheme } = require('vuepress');
const { searchPlugin } = require('@vuepress/plugin-search');

module.exports = {
    lang: 'zh-CN',
    title: '前端面试题大全',
    description: '最全前端面试题总结',
    head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
    theme: defaultTheme({
        logo: '/images/logo.png',
        repo: 'jyp0426/frontend-interview',
        navbar: [
            {text: '首页', link: '/'},
            {text: 'HTML', link: '/html'},
            {text: 'CSS', link: '/css'},
            {text: 'JavaScript', link: '/javascript'},
            {text: 'Vue', link: '/vue'},
            {text: 'React', link: '/react'},
            {text: 'Webpack', link: '/webpack'},
            {text: 'Git', link: '/git'},
            {text: '网络', link: '/netwoek'},
            {text: '算法', link: '/algorithm'},
        ],
        editLink: false
    }),
    plugins: [
        searchPlugin({}),
    ]
}