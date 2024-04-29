const path = require('path')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: process.env.GATSBY_APP_URL || 'http://localhost:8000',
    title: `Sandy Travel Cianjur`,
    author: {
      name: `Gujarat Santana`,
      summary: `Trusted and Well Manner`,
      webServices: `https://jrvel.com`,
    },
    description: `Sandy Travel Cianjur, Travel Door to Door, Antar Jemput`,
    siteUrl: `https://www.alternatiftravelcianjur.com`,
    social: {
      facebook: `https://www.facebook.com/sandyzdx?sfnsn=wiwspwa&mibextid=RUbZ1f`,
      instagram: `https://www.instagram.com/zedax02`,
      whatsapp: `https://wa.me/+6281214540566`,
      whatsapp2: `https://wa.me/+62895392904728`,
      location: `https://www.google.com/maps?q=-6.7909131,107.0618571&z=17&hl=en`,
    },
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-preload-fonts',
    'gatsby-plugin-image',
    'gatsby-plugin-dark-mode',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-brotli',
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              quality: 72,
              withWebp: true,
              withAvif: true,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        resolveSiteUrl: () =>
          process.env.GATSBY_APP_URL || 'https://www.example.com',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@': path.join(__dirname, 'src'),
        '~': path.join(__dirname, ''),
        styles: path.join(__dirname, 'src/styles'),
        img: path.join(__dirname, 'static/img'),
      },
    },
    {
      resolve: 'gatsby-plugin-decap-cms',
      options: {
        manualInit: true,
        modulePath: `${__dirname}/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
