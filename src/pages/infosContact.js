import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const InfosContactPage = () => (
	<Layout>
		<SEO title="Infos Contact Page" />
		<h1>Informations & contact</h1>
		<p>Welcome to InfosContactPage</p>
		<Link to="/">Go back to the homepage</Link>
	</Layout>
)

export default InfosContactPage
