import './globals.css'

export const metadata = {
    title: 'Harrisonn',
    description: 'Meu site de portfólio',
}

export default function RootLayout({ children }) {
    return (
		<html lang="pt-BR" >
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Red+Hat+Display:wght@500;900&display=swap" rel="stylesheet" />
			</head>
			<body >{children}</body>
		</html>
    )
}
