require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Mary Choueiter`,
    description: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API,
        concurrency: 10,
        tables: [
          {
            baseId: `appYkA3RznpP4TcUq`,
            tableName: `WorkHome`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appYkA3RznpP4TcUq`,
            tableName: `Beirut Exhibition Center`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appYkA3RznpP4TcUq`,
            tableName: `Canadian Museum For Human Rights`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appYkA3RznpP4TcUq`,
            tableName: `Contes Feriques`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appYkA3RznpP4TcUq`,
            tableName: `Enlarged To Show Detail`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appYkA3RznpP4TcUq`,
            tableName: `Klimop Benefitavaond`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appYkA3RznpP4TcUq`,
            tableName: `Lef Corporate Identity`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appYkA3RznpP4TcUq`,
            tableName: `Mathaf`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appYkA3RznpP4TcUq`,
            tableName: `Melab Gallery`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appYkA3RznpP4TcUq`,
            tableName: `Moody Gardens Aquarium`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appYkA3RznpP4TcUq`,
            tableName: `Ocean Gazing Podcast Website`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appYkA3RznpP4TcUq`,
            tableName: `Yuki Press Poster Pamphlet`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appYkA3RznpP4TcUq`,
            tableName: `Villa Sehnaoui Inter Design Elements`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appGvNaH7D0N8pqLR`,
            tableName: `SideNotesHome`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appGvNaH7D0N8pqLR`,
            tableName: `World Population Day Social Media Post`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appGvNaH7D0N8pqLR`,
            tableName: `Stories Under The Stars`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appGvNaH7D0N8pqLR`,
            tableName: `Bubbles, A Little Thank You`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appGvNaH7D0N8pqLR`,
            tableName: `Holiday Cards 2013-2015`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appGvNaH7D0N8pqLR`,
            tableName: `Ghinwa and Ari Wedding Invite`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appGvNaH7D0N8pqLR`,
            tableName: `Wind Writings`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appGvNaH7D0N8pqLR`,
            tableName: `Writing Meander`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appGvNaH7D0N8pqLR`,
            tableName: `City Debates Publication`,
            mapping: { Attachments: `fileNode` },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
