import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapClient from '../components/BootstrapClient'
import '../Assets/fontawesome-free-6.5.1-web/css/all.css'
import './global.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-pt">
      <body >
          {children}
      </body>
      <BootstrapClient />
    </html>
  )
}
