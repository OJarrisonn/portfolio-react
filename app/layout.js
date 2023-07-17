import './globals.css'
import { Inter, Red_Hat_Display } from 'next/font/google'

import './styles/html.css'
import './styles/header.css'
import './styles/main.css'
import './styles/content.css'

const inter = Inter({ subsets: ['latin'] });
const redhat = Red_Hat_Display({ subsets: ['latin']});

export const metadata = {
  title: 'Harrisonn',
  description: 'Meu site de portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
