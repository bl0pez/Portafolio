
import { useContext, useRef, useState } from 'react';
import { routes } from './routes';
import './header.css';
import logo from '../../assets/img/logo.svg';
import { ScrollContext } from '../../context/ScrollContext';

export const Header = () => {
    
    // const [ref] = useOnScreen({ rootMargin: '0px 0px -50% 0px' });
    const menuRef = useRef();

    const { onSelectLink, activeLink } = useContext(ScrollContext);

    const handleToggleMenu = () => {
        menuRef.current.classList.toggle('show');
    }

    // useEffect(() => {

    //    const section = document.getElementById(activeLink);
       
    //    const sectionTop = section.offsetTop;
    //    const sectionHeight = section.clientHeight;
    //    const scrollPosition = window.scrollY;

    //    console.log({sectionTop});
    //      console.log({sectionHeight});    
    //    console.log({scrollPosition});

    //    if(sectionTop === 0){
    //      setActiveLink('inicio');
    //    }

    //    if(sectionTop === 969){
    //         setActiveLink('habilidades');
    //    }

    // }, [window.location.hash, activeLink, window.scrollY])

    // const handleClick = (section) => {
    //     setActiveLink(section);
    // };


    //   useEffect(() => {
    //     const handleScroll = () => {
    //       const scrollPosition = window.scrollY;
    //       routes.forEach((route) => {
    //         const section = document.getElementById(route.value);
    //         if (!section) return;
    //         const sectionTop = section.offsetTop;
    //         const sectionHeight = section.clientHeight;

    //         if (
    //           scrollPosition >= sectionTop - sectionHeight * 0.25 &&
    //           scrollPosition <= sectionTop + sectionHeight - sectionHeight * 0.25
    //         ) {
    //             console.log(route.value);
    //           setActiveLink(route.value);
    //           window.location.hash = route.value;
    //         }
    //       });
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //       window.removeEventListener("scroll", handleScroll);
    //     };
    //   }, [routes, activeLink]);



    return (
        <header className="header">

            <nav className='nav container'>
                <img src={logo} alt="blopez logo" className='nav__logo' />
                <ul className='nav__list' ref={menuRef}>
                    {
                        routes.map((route) => (
                            <li
                                key={route.id}
                                className={`nav_item ${activeLink === route.value ? 'linkActive' : ''}`}
                                onClick={() => onSelectLink(route.value)}
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