import React from 'react'
import styled from 'styled-components'
import { colors, pxToRem } from '../theme/helpers'

const Footer = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${colors.white};
	height: ${pxToRem(50)};
	padding: 0.3rem 0.5rem;
	border-top: 1px solid #e6d3e5;
	border-bottom: 1px solid #e6d3e5;

	span,
	span > * {
		color: #49304e;
	}
`

const FooterSection = () => {
	return (
		<Footer>
			<span>
				By<a href="https://www.renamelie.fr"> Ren Amélie </a> ©{' '}
				{new Date().getFullYear()}
			</span>
		</Footer>
	)
}

export default FooterSection
