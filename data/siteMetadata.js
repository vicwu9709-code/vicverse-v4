/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Vicverse',
  author: 'Vic',
  headerTitle: 'Vicverse',
  description: '一个记录探索、整理思考与沉淀路径的个人网站。',
  language: 'zh-CN',
  theme: 'dark',
  siteUrl: 'https://vicverse.me',
  siteRepo: '',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  mastodon: '',
  email: '3035465527@qq.com',
  github: '',
  x: '',
  facebook: '',
  youtube: '',
  linkedin: '',
  threads: '',
  instagram: '',
  medium: '',
  bluesky: '',
  locale: 'zh-CN',
  stickyNav: false,
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID,
    },
  },
  newsletter: {
    provider: '',
  },
  comments: {
    provider: '',
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}

module.exports = siteMetadata