import React from 'react'

import Styled from 'styled-components'
import { colors, pxToRem } from '../theme/helpers'

const ContactForm = ({ className }) => {
	// const [name, setName] = useState('')
	// const [email, setEmail] = useState('')
	// const [message, setMessage] = useState('')

	// const onNameChange = e => {
	// 	setName(e.target.value)
	// }

	// const onEmailChange = e => {
	// 	setEmail(e.target.value)
	// }

	// const onMessageChange = e => {
	// 	setMessage(e.target.value)
	// }

	// const resetForm = () => {
	// 	setName('')
	// 	setEmail('')
	// 	setMessage('')
	// }

	return (
		<form className={className} name="Contact Form" data-netlify="true">
			<input type="hidden" name="form-name" value="Contact Form" />
			<div className="formGroup">
				<label htmlFor="name">
					<input
						className="form-control"
						type="text"
						placeholder="Name"
						// value={name}
						name="name"
					/>
				</label>
			</div>
			<div className="formGroup">
				<label htmlFor="email">
					<input
						className="form-control"
						type="email"
						placeholder="Email"
						// value={email}
						name="email"
					/>
				</label>
			</div>
			<div className="formGroup">
				<label htmlFor="message">
					<textarea
						className="form-control"
						placeholder="Message"
						// value={message}
					/>
				</label>
			</div>
			<div className="buttonForm">
				<button type="submit" className="btn btn-primary">
					Envoyer
				</button>
			</div>
		</form>
	)
}

export default Styled(ContactForm)`
	padding: ${pxToRem(20)};
	border-radius: ${pxToRem(20)};

	textarea, input {
		padding: ${pxToRem(10)};
	}

	/* textarea:focus, input:focus {
		box-shadow: 0 0 5px 2px pink;
	} */

	textarea {
		resize : none;
		height: 200px;
	}

	.formGroup, input {
		border-radius: ${pxToRem(10)};

	}

	.formGroup > *, input, textarea,  .buttonForm > * {
		border-color: transparent;
		border-radius: ${pxToRem(10)};
		transition: 0.5s;

		font-family: 'Montserrat', sans-serif;
		background-color: ${colors.white};
		width: 100%;
		outline: none;
	}

	.formGroup, .buttonForm {
		display: flex;
		justify-content: center;
		margin: ${pxToRem(14)};
		border-radius: ${pxToRem(10)};
	}

	button {
		cursor: pointer;
		color: ${colors.accent};
		background-color: ${colors.white};
		width: ${pxToRem(100)};
		padding: ${pxToRem(10)};
		border-radius: ${pxToRem(20)};
		text-transform: uppercase;
		outline: none;
	}

	button:hover {
		color: ${colors.black};
	}
`
