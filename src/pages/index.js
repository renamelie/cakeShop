import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProductsList from '../components/ProductsList'

// import styled from 'styled-components'
// import { pxToRem } from '../theme/helpers'

const IndexPage = () => (
	<Layout>
		<SEO title="Page two" />
		<h1>Hi !</h1>
		<p>Welcome to my cakeShop.</p>
		<ProductsList />
	</Layout>
)

export default IndexPage
