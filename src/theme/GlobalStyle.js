import { createGlobalStyle } from 'styled-components'

// import { colors } from './helpers'
import backgroundDots from '../images/blueDots.jpg'

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    transition: 600ms;
    color: black;
    background: white;

    background-image: url(${backgroundDots});
	  background-repeat: repeat;
	  background-size: cover;
  }

  button {
		background-color: transparent;
		border: 1px solid transparent;
	}

`

export default Global
