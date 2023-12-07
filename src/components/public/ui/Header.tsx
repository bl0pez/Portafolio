"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Logo } from '@/components/common/icons/Logo';
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const routes = [
    {
        name: 'Inicio',
        path: '/',
        ariaLabel: 'Ir a la página de inicio'
    },
    {
        name: 'Habilidades',
        path: '/skills',
        ariaLabel: 'Ir a la página de habilidades'
    },
    {
        name: 'Proyectos',
        path: '/projects',
        ariaLabel: 'Ir a la página de proyectos'
    },
    {
        name: 'Contacto',
        path: '/contact',
        ariaLabel: 'Ir a la página de contacto'
    }
]

export const Header = () => {

    const pathname = usePathname();

    const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <header className='border-b border-primary'>
        <div className='container mx-auto flex justify-between px-2 py-1 items-center'>
            <Link 
                aria-label='Ir a la página de inicio'
                href='/'
            >
                <Logo />
            </Link>
            <button 
                onClick={() => setIsMenuOpen(true)}
                title='Abrir menú'
                className='md:hidden p-2'>
                <GiHamburgerMenu size={40} />
            </button>
            <nav className={`
                fixed 
                top-0 
                right-0
                w-full
                h-full 
                z-10
                -translate-x-full
                ${isMenuOpen && 'translate-x-0'}
                md:static
                md:h-auto
                md:w-auto
                md:translate-x-0
                menuTransition
            `}>
                <button 
                    className='md:hidden p-2 absolute right-1 top-2' 
                    title='Cerrar menú'
                    onClick={() => setIsMenuOpen(false)}>
                    <IoMdClose className='md:hidden' size={40} />
                </button>
                <ul className='flex flex-col items-center bg-primary h-full justify-center gap-10 md:flex-row md:bg-transparent'>
                    {
                        routes.map((routes) => (
                            <li key={routes.name}>
                                <Link 
                                    className={`px-5 py-2 rounded-md text-4xl hover:bg-primary transition-background duration-200  md:text-lg ${pathname === routes.path && 'active'}`} href={routes.path}
                                    aria-label={routes.ariaLabel}
                                    >{routes.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    </header>
  )
}
