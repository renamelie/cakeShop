import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'

import Img from 'gatsby-image'

export default ({ data }) => {
	const { name, price, description, image } = data.datoCmsProduct
	const __html = data.datoCmsProduct.description

	return (
		<Layout>
			<SEO title={name} description={description} />
			<h2>{name}</h2>
			<Img fluid={image.fluid}></Img>
			<p>{price}</p>
			<div dangerouslySetInnerHTML={{ __html }} />
		</Layout>
	)
}

export const query = graphql`
	query($slug: String!) {
		datoCmsProduct(slug: { eq: $slug }) {
			id
			slug
			name
			price
			description
			image {
				url
				fluid(maxWidth: 200, maxHeight: 200) {
					...GatsbyDatoCmsFluid
				}
			}
		}
	}
`
