import { useRef } from 'react';
import { routes } from './routes';
import logo from '../../assets/img/logo.svg';
import './header.css';

export const Header = () => {
    const menuRef = useRef();

    const handleToggleMenu = () => {
        menuRef.current.classList.toggle('show');
    }




    return (
        <header className="header">

            <nav className='nav container'>
                <img src={logo} alt="blopez logo" className='nav__logo' />
                <ul className='nav__list' ref={menuRef}>
                    {
                        routes.map((route) => (
                            <li
                                key={route.id}
                                data-url={route.value}
                                className="nav_item"
                            >
                                <a href={`#${route.value}`} className='nav__link'>{route.name}</a>
                            </li>

                        ))
                    }
                </ul>

                <button
                    onClick={handleToggleMenu}
                    className="nav__toggle"
                    id="nav-toggle">
                    <i className="fas fa-bars"></i>
                </button>
            </nav>

        </header>
    )
}


{/* <li className='nav__item'>
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
                </li> */}