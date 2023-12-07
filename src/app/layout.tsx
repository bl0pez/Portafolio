import './globals.css'
import { Header } from '@/components/public/ui/Header'
import { Footer } from '@/components/public/ui/Footer'
import Head from 'next/head';
import { font } from './ui/fonts';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </Head>
      <body className={`${font.className} antialiased`}>
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  )
}
