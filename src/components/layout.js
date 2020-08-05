import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import backgroundDots from '../images/blueDots.jpg'
import GlobalStyle from '../theme/GlobalStyle'
import './layout.css'

import Header from './header'
import Navigation from './Navigation'

const Container = styled.div`
	margin: 0 auto;
	max-width: 960;
	padding: 0 1.0875rem 1.45rem;
	background-image: url(${backgroundDots});
	background-repeat: repeat;
	background-size: cover;
`

const Main = styled.main`
	/* background-image: url(../images/blueDots.jpg); */
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
		<>
			<div
				id="snipcart"
				data-api-key="OTgwMGMyZmYtYjU1Ni00MGExLTlhMTQtYmI0Njk0YWFhMWQ4NjM3MzIwNTY3NjU5ODgxNDUz"
				hidden
			></div>

			<GlobalStyle />

			<Header siteTitle={data.site.siteMetadata.title} />

			<Navigation />

			<Container>
				<Main>{children}</Main>
			</Container>
			<footer>
				© {new Date().getFullYear()}, Built with
				{` `}
				<a href="https://www.renamelie.fr">Ren Amélie</a>
			</footer>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
