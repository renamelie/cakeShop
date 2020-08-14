import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Img from 'gatsby-image'
import styled from 'styled-components'
import { colors, pxToRem } from '../theme/helpers'

import AddSnipcart from '../components/AddSnipcart'

const ProductsGrid = styled.div`
	display: grid;
	/* Define Auto Row size - même hauteur pour tous */
	grid-auto-rows: max-content;
	grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
	grid-gap: 1em;
`

const Article = styled.article`
	background-color: ${colors.white};
	border-radius: 10px;
	padding: 10px;

	display: flex;
	flex-direction: column;

	h2,
	p {
		font-family: 'Montserrat', sans-serif;
		color: ${colors.black};
		font-weight: 400;
		margin: ${pxToRem(18)};
		text-align: center;
	}

	h2 {
		font-size: ${pxToRem(18)};
		font-weight: 400;
	}

	p {
		font-size: ${pxToRem(16)};
	}
`

const ProductsList = () => {
	const data = useStaticQuery(graphql`
		query ProductsListQuery {
			allDatoCmsProduct {
				edges {
					node {
						id
						slug
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
	`)
	const products = data.allDatoCmsProduct.edges

	return (
		<ProductsGrid>
			{products.map(({ node: product }) => (
				<Article key={product.id}>
					<Link to={`/${product.slug}`}>
						<Img fluid={product.image.fluid} />
					</Link>
					<h2>{product.name}</h2>
					<p>{`${product.price} €`}</p>
					<AddSnipcart product={product} bgColor={colors.accent} />
				</Article>
			))}
		</ProductsGrid>
	)
}

export default ProductsList
