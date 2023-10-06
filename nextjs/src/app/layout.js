'use client'

import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '../lib/registry'
import GlobalStyles from '../styles/globalStyles'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
				<link
					href="https://fonts.googleapis.com/css?family=Poppins:300,600,700&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css?family=Muli:200,300,600&display=swap"
					rel="stylesheet"
				/>
				<link rel="stylesheet" type="text/css" href="dist/styles/main.css" />
				<link rel="icon" href="favicon.png" sizes="16x16" />
			</head>
			<body>
				<StyledComponentsRegistry>
					<GlobalStyles />
					{children}
				</StyledComponentsRegistry>
			</body>
		</html>
	)
}
