module.exports = {
  siteMetadata: {
    siteUrl: "https://www.tomedes.com/",
    title: "Tomedes",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/favicon.ico",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-resolve-src",
    {
      resolve: "@sentry/gatsby",
      options: {
        dsn: "https://ee5986b8b2c746e394c5fb8d7cd84dd3@o917834.ingest.sentry.io/6053735",
        sampleRate: 0.7,
      },
    },
  ],
};
