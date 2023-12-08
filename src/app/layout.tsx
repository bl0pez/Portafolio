import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/public/ui/Header'
import { Footer } from '@/components/public/ui/Footer'
import Head from 'next/head';
import { font } from './ui/fonts';

export const metadata: Metadata = {
  title: {
    template: "%s - Portafolio", 
    default: "Portafolio | Bryan Lopez",
  },
  description: "Desarrollador Web Fullstack | React, Nextjs, Nodejs, Nestjs, Express, MongoDB, Tailwindcss, Typescript, Javascript",
}



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
          <main className="flex-auto flex container mx-auto items-center flex-wrap gap-2">
            {children}
          </main>
          <Footer />
      </body>
    </html>
  )
}
