import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { media } from '../theme/helpers'
import { IoIosMenu, IoMdClose } from 'react-icons/Io'

function ModalMenu({ className }) {
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<div className={className}>
			<button onClick={() => setIsModalOpen(true)}>
				<IoIosMenu />
			</button>

			{isModalOpen && (
				<Overlay>
					<Dialog>
						<button onClick={() => setIsModalOpen(false)}>
							<IoMdClose />
						</button>
						<ul className="ulModal">
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
					</Dialog>
				</Overlay>
			)}
		</div>
	)
}

const Overlay = styled.div`
	z-index: 999;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.3);
`

const Dialog = styled.div`
	width: 100%;
	height: 100%;
	background: white;
	border-radius: 5px;
	padding: 20px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`

export default styled(ModalMenu)`
	button {
		font-size: 2rem;
		vertical-align: middle;
		float: right;
	}

	${media.small`
		button {
			display: none;
		}
	`}

	.ulModal {
		flex-direction: column;
		padding: 2rem;
		margin: 0;
		height: 100%;
	}
`
