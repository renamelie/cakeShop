import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { media } from '../theme/helpers'

import ModalMenu from './ModalMenu'

const Navigation = ({ className }) => {
	return (
		<nav className={className}>
			<ul className="ulNav">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/products/">Products</Link>
				</li>
				<li>
					<Link to="/infosContact/">Infos & Contact</Link>
				</li>
			</ul>
			<ModalMenu />
			<button className="snipcart-checkout caddie">
				<span role="img" aria-label="Caddie">
					🛒 Cart
				</span>
			</button>
		</nav>
	)
}

export default styled(Navigation)`
	background-color: #f4f1f1;
	color: #49304e;
	min-height: 2.6rem;
	padding: 0.3rem 0.5rem;
	border-top: 1px solid #e6d3e5;
	border-bottom: 1px solid #e6d3e5;

	display: flex;
	justify-content: space-between;
	align-items: center;

	${media.small`
		.ulNav {
			display: flex !important;
		}
	`}

	.ulNav {
		display: none;
		margin: 0;
		padding: 0 0.5rem;
	}

	li {
		font-size: 0.9rem;
		border-left: 1px solid #e6d3e5;
		margin: 0;
		padding: 0.3rem 1rem;
		white-space: nowrap;
		cursor: pointer;
	}

	li > * {
		color: #49304e;
		font-weight: 400;
	}

	.caddie {
		padding: 0.3rem 0.5rem;
		border-left: 1px solid #e6d3e5;
		border-right: 1px solid #e6d3e5;
		font-weight: 500;
	}
`
