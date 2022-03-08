require('dotenv').config();

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-minimal-blog/gatsby-config.js
    siteTitle: 'Cycling is Cool',
    siteTitleAlt: 'Cycling is Cool',
    siteUrl: 'https://cyclingiscool.com',
    siteHeadline: 'Cycling is Cool Merch',
    siteDescription: 'Cycling is Cool -- let the world know!',
    siteLanguage: 'en',
    siteImage: '/product.png',
    author: '@moromis',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'gallery',
        path: `${__dirname}/content/gallery`,
      },
    },
    {
      resolve: '@lekoarts/gatsby-theme-minimal-blog',
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: 'Home',
            slug: '/',
          },
          {
            title: 'Gallery',
            slug: '/gallery',
          },
          {
            title: 'Shop',
            slug: '/shop',
          },
          // {
          //   title: `Blog`,
          //   slug: `/blog`,
          // },
          // {
          //   title: `About`,
          //   slug: `/about`,
          // },
        ],
        // externalLinks: [
        //   {
        //     name: `Twitter`,
        //     url: `https://twitter.com/lekoarts_de`,
        //   },
        //   {
        //     name: `Homepage`,
        //     url: `https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Starter`,
        //   },
        // ],
      },
    },
    {
      resolve: 'gatsby-omni-font-loader',
      options: {
        enableListener: true,
        preconnect: ['https://fonts.gstatic.com'],
        interval: 300,
        timeout: 30000,
        // If you plan on changing the font you'll also need to adjust the Theme UI config to edit the CSS
        // See: https://github.com/LekoArts/gatsby-themes/tree/main/examples/minimal-blog#changing-your-fonts
        web: [
          {
            name: 'IBM Plex Sans',
            file: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap',
          },
        ],
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'cycling-is-cool',
        short_name: 'cycling-is-cool',
        description: 'Cycling is Cool -- let everyone know!',
        start_url: '/',
        background_color: '#fff',
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: '#2256C1',
        display: 'standalone',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-gatsby-cloud',
    shouldAnalyseBundle && {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        analyzerMode: 'static',
        reportFilename: '_bundle.html',
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
