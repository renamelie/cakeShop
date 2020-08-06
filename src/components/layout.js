import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import { pxToRem } from '../theme/helpers'
import styled from 'styled-components'

import backgroundDots from '../images/blueDots.jpg'
import GlobalStyle from '../theme/GlobalStyle'
import './layout.css'

import Header from './header'
import Footer from './Footer'
import Navigation from './Navigation'

const Main = styled.main`
	max-width: 1000px;
	margin: 0 auto;
	padding: ${pxToRem(50)} 1.45rem;
	background-image: url(${backgroundDots});
	background-repeat: repeat;
	background-size: cover;
`

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<div>
			<div
				id="snipcart"
				data-api-key="OTgwMGMyZmYtYjU1Ni00MGExLTlhMTQtYmI0Njk0YWFhMWQ4NjM3MzIwNTY3NjU5ODgxNDUz"
				data-currency="EUR"
				hidden
			></div>

			<GlobalStyle />

			<Header siteTitle={data.site.siteMetadata.title} />

			<Navigation />

			<Main>{children}</Main>

			<Footer />
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
