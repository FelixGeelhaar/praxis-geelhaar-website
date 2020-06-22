require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Praxis Geelhaar`,
    description: `Die Website der Praxis Geelhaar`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/activities`,
      },
    },
    {
      resolve: "gatsby-transformer-cloudinary",
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,

        // This folder will be created if it doesn’t exist.
        uploadFolder: `gatsby-cloudinary-${process.env.NODE_ENV}-praxis-geelhaar`,
      },
    },
    {
      resolve: `@directus/gatsby-source-directus`,
      options: {
        url: `https://directus.praxis-geelhaar.de`,
        project: "praxis-geelhaar",
        auth: {
          token: process.env.DIRECTUS_API_TOKEN,
        },
        targetStatuses: ["published"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `praxis-geelhaar-website`,
        short_name: `praxis-geelhaar`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
  ],
}
