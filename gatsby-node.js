const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions
	return graphql(`
		{
			allDatoCmsProduct {
				edges {
					node {
						slug
					}
				}
			}
		}
	`).then(result => {
		const posts = result.data.allDatoCmsProduct.edges

		posts.forEach(post => {
			createPage({
				path: post.node.slug,
				component: path.resolve(`./src/templates/post.js`),
				context: {
					slug: post.node.slug,
				},
			})
		})
	})
}
