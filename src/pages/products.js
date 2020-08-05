import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ProductsPage = () => (
	<Layout>
		<SEO title="Page two" />
		<h1>Hi from the Products page</h1>
		<p>Welcome to Products page</p>
		<Link to="/">Go back to the homepage</Link>
	</Layout>
)

export default ProductsPage
