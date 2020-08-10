import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import { IconContext } from 'react-icons'
import { FaCartArrowDown } from 'react-icons/fa'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { colors, pxToRem } from '../theme/helpers'

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
		font-size: ${pxToRem(18)};
		font-weight: 300;
	}

	.buttonAdd {
		background-color: ${colors.accent};
		padding: ${pxToRem(18)};
		text-align: center;
	}

	a {
		font-size: ${pxToRem(30)};
		display: flex;
		margin: 0;
		justify-content: center;
	}

	p {
		font-size: ${pxToRem(16)};
		text-align: center;
	}

	.iconClass {
		color: ${colors.white};
	}

	.iconClass:hover {
		color: ${colors.primary};
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
					<Img fluid={product.image.fluid}></Img>
					<Link to={`/${product.slug}`}>
						<h2>{product.name}</h2>
					</Link>
					<p>{`${product.price} €`}</p>
					<IconContext.Provider value={{ className: 'iconClass' }}>
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
								<FaCartArrowDown />
							</a>
						</div>
					</IconContext.Provider>
				</Article>
			))}
		</ProductsGrid>
	)
}

export default ProductsList
