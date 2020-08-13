import React from 'react'
import PropTypes from 'prop-types'

import { pxToRem } from '../theme/helpers'
import styled from 'styled-components'

import backgroundDots from '../images/blueDots.jpg'
import './layout.css'

import Footer from './Footer'

const Main = styled.main`
	max-width: 1000px;
	margin: 0 auto;
	padding: ${pxToRem(50)} 1.45rem;
	/* background-image: url(${backgroundDots});
	background-repeat: repeat;
	background-size: cover; */
`

const Layout = ({ children }) => {
	return (
		<div>
			<Main>{children}</Main>

			<Footer />
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
