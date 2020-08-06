import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { IconContext } from 'react-icons'
import { GrAddCircle } from 'react-icons/gr'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { colors, pxToRem } from '../theme/helpers'

const ProductsGrid = styled.div`
	display: grid;
	/* Define Auto Row size - même hauteur pour tous */
	grid-auto-rows: max-content;
	grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
	grid-gap: 1em;
`

const Article = styled.article`
	background-color: ${colors.white};
	border-radius: 10px;
	padding: 20px;

	h2,
	p {
		font-family: 'Montserrat', sans-serif;
		color: ${colors.black};
		font-weight: 400;
		margin: ${pxToRem(18)};
		text-align: center;
	}

	h2 {
		font-size: ${pxToRem(24)};
	}

	.buttonAdd {
		background-color: ${colors.accent};
		padding: ${pxToRem(18)};
		text-align: center;
	}

	a {
		font-size: ${pxToRem(24)};
		display: flex;
		margin: 0;
		justify-content: center;
	}

	p {
		font-size: ${pxToRem(18)};
		text-align: right;
	}
`

const ProductsList = () => {
	const data = useStaticQuery(graphql`
		query ProductsListQuery {
			allDatoCmsProduct {
				edges {
					node {
						id
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
					<Img fluid={product.image.fluid}></Img>
					<h2>{product.name}</h2>
					<p>{`${product.price} €`}</p>
					<IconContext.Provider value={{ color: 'blue' }}>
						<div className="buttonAdd">
							<a
								href="/"
								className="snipcart-add-item"
								data-item-id={product.id}
								data-item-price={product.price}
								data-item-image={product.image.url}
								data-item-name={product.name}
								data-item-url="/"
							>
								<GrAddCircle stroke="#fff" />
							</a>
						</div>
					</IconContext.Provider>
				</Article>
			))}
		</ProductsGrid>
	)
}

export default ProductsList
