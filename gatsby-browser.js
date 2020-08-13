import React from 'react'

import Header from './src/components/header'
import Navigation from './src/components/Navigation'
import GlobalStyle from './src/theme/GlobalStyle'

export const wrapPageElement = ({ element }) => {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Navigation />
			{element}
		</>
	)
}
