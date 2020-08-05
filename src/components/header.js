import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { colors } from '../theme/helpers'

import backgroundDots from '../images/blueDots.jpg'

const Header = styled.header`
	background: white;

	h1 {
		margin: 0;
		font-family: 'Dancing Script';
		font-weight: 500;
	}

	h1 > * {
		color: ${colors.primary};
	}
`

const HeaderContainer = styled.div`
	margin: 0 auto;
	max-width: 960;
	padding: 1.45rem 1.0875rem;

	background-image: url(${backgroundDots});
	background-repeat: repeat;
	background-size: cover;
`

const HeaderPage = ({ siteTitle }) => (
	<Header>
		<HeaderContainer>
			<h1>
				<Link to="/">{siteTitle}</Link>
			</h1>
		</HeaderContainer>
	</Header>
)

HeaderPage.propTypes = {
	siteTitle: PropTypes.string,
}

HeaderPage.defaultProps = {
	siteTitle: ``,
}

export default HeaderPage
