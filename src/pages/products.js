import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProductsList from '../components/ProductsList'

// import styled from 'styled-components'
// import { colors, pxToRem } from '../theme/helpers'

const ProductsPage = () => {
	return (
		<Layout>
			<SEO title="Products Page" />
			<ProductsList />
		</Layout>
	)
}

export default ProductsPage
