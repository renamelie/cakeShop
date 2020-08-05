import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import styled from 'styled-components'
import { colors } from '../theme/helpers'

const Main = styled.main`
	display: grid;
	padding-top: 50px;
	/* Define Auto Row size - même hauteur pour tous*/
	grid-auto-rows: max-content;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	grid-gap: 1em;

	.grid-item {
		background-color: ${colors.white};
		color: ${colors.black};
		border-radius: 10px;
		padding: 20px;
	}

	.grid-item > a {
		color: #000;
		font-size: 1.5rem;
	}
`

const IndexPage = ({ data }) => {
	const products = data.allDatoCmsProduct.edges

	console.log(products)
	return (
		<Layout>
			<SEO title="Home" />
			<Main>
				{products.map(({ node: product }) => (
					<article key={product.id} className="grid-item">
						<h2>{product.name}</h2>
						<Img fluid={product.image.fluid}></Img>
						<p>{`${product.price} €`}</p>
						{/* <a href="#">Ajouter au panier</a> */}
					</article>
				))}
			</Main>
		</Layout>
	)
}

export default IndexPage

export const query = graphql`
	query ProductsQuery {
		allDatoCmsProduct {
			edges {
				node {
					name
					price
					image {
						url
						fluid(maxWidth: 600) {
							...GatsbyDatoCmsFluid
						}
					}
				}
			}
		}
	}
`
