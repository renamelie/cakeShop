import React from 'react'

import Header from './src/components/header'
import Navigation from './src/components/Navigation'
import GlobalStyle from './src/theme/GlobalStyle'

export const wrapPageElement = ({ element }) => {
	return (
		<>
			<div
				id="snipcart"
				data-api-key="OTgwMGMyZmYtYjU1Ni00MGExLTlhMTQtYmI0Njk0YWFhMWQ4NjM3MzIwNTY3NjU5ODgxNDUz"
				data-currency="EUR"
				hidden
			></div>
			<GlobalStyle />
			<Header />
			<Navigation />
			{element}
		</>
	)
}
