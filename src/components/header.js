import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { colors, pxToRem } from '../theme/helpers'

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

	display: flex;

	.headerLeft,
	.headerRight {
		display: flex;
		flex: 1;
	}

	.headerLeft {
		justify-content: flex-start;
	}

	.headerRight {
		justify-content: flex-end;
	}

	button {
		display: flex;
		align-items: center;

		margin: 0 ${pxToRem(10)};
	}

	button > * {
		align-self: center;
	}
`

const HeaderSection = ({ siteTitle }) => (
	<Header>
		<HeaderContainer>
			<div className="headerLeft">
				<h1>
					<Link to="/">{siteTitle}</Link>
				</h1>
			</div>
			<div className="headerRight">
				<button className="snipcart-customer-signin">
					<svg
						viewBox="0 0 64 64"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						alt=""
						title=""
						className="snipcart-cart-header__icon snipcart__icon--blue-dark snipcart__icon"
					>
						<path
							d="M19.609 57c-2.131 0-4.107-.888-5.562-2.499-1.543-1.707-2.268-4.023-1.988-6.342l.856-7.167c.487-4.11 2.666-7.791 5.985-10.095l1.753 2.454c-2.609 1.812-4.329 4.725-4.715 7.989l-.859 7.17a5.074 5.074 0 0 0 1.242 3.999c.868.96 2.037 1.491 3.288 1.491H45.39c1.251 0 2.42-.531 3.288-1.491a5.074 5.074 0 0 0 1.242-3.999l-.855-7.167c-.39-3.267-2.107-6.177-4.72-7.992l1.754-2.454c3.319 2.307 5.501 5.988 5.989 10.098l.852 7.164c.28 2.319-.445 4.635-1.988 6.342C49.501 56.112 47.523 57 45.391 57H19.61zM18.8 19.5c0-7.443 6.147-13.5 13.7-13.5C40.054 6 46.2 12.057 46.2 19.5S40.053 33 32.5 33c-7.552 0-13.699-6.057-13.699-13.5zm3.045 0c0 5.79 4.78 10.5 10.655 10.5 5.875 0 10.655-4.71 10.655-10.5S38.376 9 32.5 9c-5.876 0-10.655 4.71-10.655 10.5z"
							fill="#313749"
						></path>
					</svg>
					<span>Login</span>
				</button>
				<button className="snipcart-checkout">
					<svg
						viewBox="0 0 64 64"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						alt=""
						title=""
						className="snipcart-cart-header__icon snipcart__icon--blue-dark snipcart__icon"
					>
						<path
							d="M51.714 20.47L55 60H9l3.286-39.53h9.857v-6.588C22.143 8.424 26.556 4 32 4c5.444 0 9.857 4.424 9.857 9.882v6.589h9.857zM25.43 13.883v16.47h-3.286v-6.587h-6.834l-2.737 32.94h38.856l-2.737-32.94h-6.834v6.588h-3.286v-16.47c0-3.634-2.947-6.589-6.571-6.589-3.624 0-6.571 2.955-6.571 6.588zm3.285 9.883V20.47h6.572v3.294h-6.572z"
							fill="#313749"
						></path>
					</svg>
					<span className="snipcart-items-count" />
				</button>
			</div>
		</HeaderContainer>
	</Header>
)

HeaderSection.propTypes = {
	siteTitle: PropTypes.string,
}

HeaderSection.defaultProps = {
	siteTitle: ``,
}

export default HeaderSection
