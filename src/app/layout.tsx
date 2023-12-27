import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Protafolio de Bryan Lopez S - Desarrollador y Programador Web",
  description:
    "Bryan Lopez, Desarrollador Web Fullstack especializado en React, Next.js, Node.js, Nest.js, Express, MongoDB, Tailwind CSS, TypeScript y JavaScript. Descubre mis proyectos y habilidades en mi portafolio.",
  keywords: [
    "Junior Fullstack Web Developer",
    "Bryan Lopez",
    "Desarrollador Web",
    "React",
    "Next.js",
    "Node.js",
    "Nest.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "TypeScript",
    "JavaScript",
    "Portafolio",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
