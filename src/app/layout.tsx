import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/public/ui/Header'
import { Footer } from '@/components/public/ui/Footer'
import Head from 'next/head';
import { font } from './ui/fonts';

export const metadata: Metadata = {
  title: {
    template: "%s - Bryan Lopez | Desarrollador Web Fullstack",
    default: "Bryan Lopez - Portafolio de Desarrollador Web Fullstack"
  },
  description: "Bryan Lopez, Desarrollador Web Fullstack especializado en React, Next.js, Node.js, Nest.js, Express, MongoDB, Tailwind CSS, TypeScript y JavaScript. Descubre mis proyectos y habilidades en mi portafolio.",
  authors: [{ name: "Bryan Lopez", url: "https://blopez.cl/" }],
  keywords: ["Bryan Lopez", "Desarrollador Web", "Fullstack", "React", "Next.js", "Node.js", "Nest.js", "Express", "MongoDB", "Tailwind CSS", "TypeScript", "JavaScript", "Portafolio"],
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://blopez.cl/",
    title: "Bryan Lopez - Portafolio de Desarrollador Web Fullstack",
    description: "Bryan Lopez, Desarrollador Web Fullstack especializado en React, Next.js, Node.js, Nest.js, Express, MongoDB, Tailwind CSS, TypeScript y JavaScript. Descubre mis proyectos y habilidades en mi portafolio.",
    images: [
      {
        url: "https://blopez.cl/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Logo de Bryan Lopez",
      },
    ],
  }
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
            {children}
          <Footer />
      </body>
    </html>
  )
}