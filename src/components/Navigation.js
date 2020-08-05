import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Navigation = ({ className }) => {
	return (
		<nav className={className}>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/products/">Products</Link>
				</li>
				<li>
					<Link to="/infosContact/">Infos & Contact</Link>
				</li>
				<li>
					<button className="snipcart-checkout">
						<span role="img" aria-label="Caddie">
							🛒 Cart
						</span>
					</button>
				</li>
			</ul>
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

	ul {
		display: flex;
		margin: 0 auto;
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

	li:last-child {
		border-right: 1px solid #e6d3e5;
		margin-left: auto;
		font-weight: 600;
	}
`
