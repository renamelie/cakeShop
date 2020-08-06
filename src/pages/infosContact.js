import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const InfosContactPage = () => (
	<Layout>
		<SEO title="Infos Contact Page" />
		<h1>Informations & contact</h1>
		<form name="Contact Form" method="POST" data-netlify="true">
			<input type="hidden" name="form-name" value="Contact Form" />
			<div>
				<label htmlFor="email">
					Your Email:
					<input type="email" name="email" id="email" />
				</label>
			</div>
			<div>
				<label htmlFor="message">
					Message:
					<textarea name="message" id="message" />
				</label>
			</div>
			<button type="submit">Send</button>
		</form>
	</Layout>
)

export default InfosContactPage
