const products = require('./src/products')

module.exports = {
	siteMetadata: {
		title: `CakeShop`,
		description: `CakeShop Store`,
		author: `Ren Amélie`,
		products: [...products],
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-source-datocms`,
			options: {
				apiToken: `d7144cc0efd6cbb7ffa185f1ff5074`,
			},
		},
		{
			resolve: `gatsby-plugin-snipcartv3`,
			options: {
				apiKey: `OTgwMGMyZmYtYjU1Ni00MGExLTlhMTQtYmI0Njk0YWFhMWQ4NjM3MzIwNTY3NjU5ODgxNDUz`,
				autopop: true,
				js: 'https://cdn.snipcart.com/themes/v3.0.18/default/snipcart.js',
				jquery: false,
				styles: 'https://cdn.snipcart.com/themes/v3.0.18/default/snipcart.css',
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/cake.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts-v2`,
			options: {
				fonts: [
					{
						family: 'Roboto Slab',
						variable: true,
						weights: ['200..900'],
					},
					{
						family: 'Montserrat',
						variable: true,
						weights: ['100..900'],
					},
					{
						family: 'Dancing+Script',
						variable: true,
						weights: ['400..700'],
					},
				],
			},
		},
		{
			resolve: `gatsby-source-datocms`,
			options: {
				apiToken: `56e3d212d4325688d6e4a9b3cc298a`,
			},
		},
	],
}
