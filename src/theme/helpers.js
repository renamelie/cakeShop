import { css } from 'styled-components'

export const colors = {
	primary: '#49304e',
	accent: '#b5adde',
	white: '#fff',
	black: '#1f1f1f',
	lightGrey: '#f7f5f6',
	grey: '#41484c',
}

export const pxToRem = (px = 16) => {
	return `${px / 16}rem`
}

const sizes = {
	large: 1200,
	medium: 800,
	small: 600,
	smaller: 321,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (min-width: ${sizes[label] / 16}rem) {
			${css(...args)}
		}
	`
	return acc
}, {})
