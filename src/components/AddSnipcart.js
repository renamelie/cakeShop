import React from 'react'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { FaCartArrowDown } from 'react-icons/fa'
import { colors, pxToRem } from '../theme/helpers'

const AddSnipcart = ({ className, product, bgColor }) => {
	return (
		<IconContext.Provider value={{ className: 'iconClass' }}>
			<button
				className={`${className} snipcart-add-item`}
				style={{ backgroundColor: bgColor }}
				data-item-id={product.id}
				data-item-price={product.price}
				data-item-image={product.image.url}
				data-item-name={product.name}
				data-item-url="https://cakeshopper.netlify.app/"
			>
				<div className="buttonAdd">
					<FaCartArrowDown />
				</div>
			</button>
		</IconContext.Provider>
	)
}

export default styled(AddSnipcart)`
	& > * {
		transition: 2s;
	}

	.buttonAdd {
		padding: ${pxToRem(18)};
		cursor: pointer;
	}

	.iconClass {
		color: ${colors.white};
		font-size: ${pxToRem(24)};
		transition: 1s;
	}

	.buttonAdd:hover .iconClass {
		color: ${colors.primary};
		transform: scale(1.2);
	}
`
