import './header.css';

import logo from '../../assets/img/logo.svg';
import { useRef } from 'react';

export const Header = () => {

    const menuRef = useRef();
    
    const handleToggleMenu = () => {
        
        menuRef.current.classList.toggle('show');

    }


  return (
    <header className="header">
        
        <nav className='nav container'>
            <img src={ logo } alt="" className='nav__logo'/>
            <ul className='nav__list' ref={menuRef}>
                <li className='nav__item'>
                    <a href="#" className='nav__link'>Inicio</a>
                </li>
                <li className='nav__item'>
                    <a href="#habilidades" className='nav__link'>Habilidades</a>
                </li>
                <li className='nav__item'>
                    <a href="#" className='nav__link'>Proyectos</a>
                </li>
                <li className='nav__item'>
                    <a href="#" className='nav__link'>Contacto</a>
                </li>
            </ul>

            <button 
                onClick={handleToggleMenu}
                class="nav__toggle" 
                id="nav-toggle">
                <i class="fas fa-bars"></i>
            </button>
        </nav>




    </header>
  )
}
