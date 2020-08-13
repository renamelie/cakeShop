import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'

import styled from 'styled-components'
import Img from 'gatsby-image'
import { colors, pxToRem, media } from '../theme/helpers'

import AddSnipcart from '../components/AddSnipcart'

const Container = styled.div`
	margin: auto;
	/* text-align: center; */

	p {
		text-align: center;
		font-size: ${pxToRem(24)};
	}

	.contentFlex {
		display: flex;
		flex-direction: column;

		padding: ${pxToRem(20)};
		background-color: ${colors.white};
	}

	.contentFlex > * {
		flex-grow: 1;
	}

	${media.small`
		.contentFlex {
			flex-direction: row;
		}

		.contentFlex > * {
			width: 50%;
		}
	`}
`

const Title = styled.h2`
	font-size: ${pxToRem(24)};
	font-weight: 500;
	text-transform: uppercase;
	border-bottom: 1px solid black;
`
const InfosProduct = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: ${pxToRem(20)} 0;

	.detailProduct {
		margin-bottom: 1.45rem;
	}

	${media.small`
		& {
			margin: 0 ${pxToRem(20)};
		}
	`}
`

export default ({ data }) => {
	const product = data.datoCmsProduct
	const __html = data.datoCmsProduct.description

	return (
		<Layout>
			<SEO title={product.name} description={product.description} />
			<Container>
				<div className="contentFlex">
					<Img fluid={product.image.fluid}></Img>
					<InfosProduct>
						<Title>{product.name}</Title>
						<p>{product.price} €</p>
						<div
							className="detailProduct"
							dangerouslySetInnerHTML={{ __html }}
						/>
						<AddSnipcart product={product} bgColor={colors.accent} />
					</InfosProduct>
				</div>
			</Container>
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
				fluid(maxWidth: 800) {
					...GatsbyDatoCmsFluid
				}
			}
		}
	}
`
