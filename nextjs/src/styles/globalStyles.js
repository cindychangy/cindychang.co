'use client'

import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const size = {
	sm: '600px',
	md: '900px',
	lg: '1200px',
	xl: '1536px',
}

const breakpoint = {
	sm: `(max-width: ${size.sm})`,
	md: `(max-width: ${size.md})`,
	lg: `(max-width: ${size.lg})`,
	xl: `(max-width: ${size.xl})`,
}


const GlobalStyle = createGlobalStyle`
	${reset}
	@font-face {
		font-family: 'Tiempos Text';
		font-style: normal;
		font-weight: 500;
		src: url('/fonts/tiempos-regular-webfont.woff2') format('woff2'),
			url('../fonts/tiempos-regular-webfont.woff') format('woff');
		font-display: swap;
	}

	@font-face {
		font-family: 'Tiempos Text Semibold';
		font-style: normal;
		font-weight: 500;
		src: url('/fonts/tiempos-semibold-webfont.woff2') format('woff2'),
			url('../fonts/tiempos-semibold-webfont.woff') format('woff');
		font-display: swap;
	}

	@font-face {
		font-family: 'Graphik';
		font-style: normal;
		font-weight: 400;
		src: url('/fonts/graphik-regular.woff2') format('woff2'),
			url('../fonts/graphik-regular.woff') format('woff');
		font-display: swap;
	}

	@font-face {
		font-family: 'Graphik Medium';
		font-style: normal;
		font-weight: 500;
		src: url('/fonts/graphik-medium.woff2') format('woff2'),
			url('../fonts/graphik-medium.woff') format('woff');
		font-display: swap;
	}

	@font-face {
		font-family: 'Graphik Semibold';
		font-style: normal;
		font-weight: 600;
		src: url('/fonts/graphik-semibold.woff2') format('woff2'),
			url('../fonts/graphik-semibold.woff') format('woff');
		font-display: swap;
	}
	
	html {
		/* 62.5% of 16px browser = 10px */
		font-size: 62.5%;
	}

	body {
		font-size: 1.6rem;
		font-family: 'Tiempos Text', serif;
    line-height: 1.7;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	html,body {
    overflow-x: hidden;
	}	

	a {
		transition: color .2s ease-in-out;
		color: inherit;
		cursor: pointer;
		display: inline-block;
	}

	h1 {
		font-family: "Tiempos Text Semibold", serif;
		font-size: 4.6rem;
		line-height: 1.1;

		@media ${breakpoint.md} {
			font-size: 3.5rem;
		}
	}

	h2 {
		font-size: 3rem;
		line-height: 1.2;
		font-family: "Tiempos Text Semibold", serif;
	}

	h3,
	h3 a {
		font-size: 1.9rem;
		line-height: 1.2;
		font-family: "Tiempos Text Semibold", serif;
		color: #000;
	}

	h4 {
		font-size: 2rem;
		color: #FF8600;
		font-family: "Graphik Semibold", Helvetica, Arial, sans-serif;
	}

	h5, 
	h5 a  {
		font-size: 1rem;
		line-height: 1;
		color: #FF8600;
		text-transform: uppercase;
		letter-spacing: 3px;
		font-family: "Graphik Medium", Helvetica, Arial, sans-serif;
	}

	p {
		font-size: 1.8rem;
		font-family: "Tiempos Text", serif;
	}

	h3 a,
	h5 a {
		text-decoration: none;

		&:hover {
			color: #000;
		}
	}

	small {
		font-size: 1.3rem;
		line-height: 1.5;
		font-family: 'Graphik', sans-serif;
		color: #6a7174;
		display: inline-block;
	}

	.active-nav-item {
		border-bottom: 3px solid #FF8600;
		width: fit-content;
	}

	span.disqus-comment-count {
		margin-left: 5px;
		color: #000 !important;
	}

	.show-mobile-nav {
		@media ${breakpoint.lg} {
			display: block !important;
		}
	}

	.mobile-nav {
		@media ${breakpoint.lg} {
			background: #fff;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			z-index: 1;
			height: 100vh;
			padding: 40px;
		}
		li {
			@media ${breakpoint.lg} {
				display: block !important;
				font-size: 2rem !important;
				line-height: 2;
			}
		}
	}

	.nav-primary--refresh .comment-count {
    font-size: 12px;
	}
	`

export default GlobalStyle
