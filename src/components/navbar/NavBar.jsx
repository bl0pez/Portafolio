import { useMemo, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { routes } from './routes';

import { logo, navIcon1, navIcon2, navIcon3 } from '../../assets/img';


export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scroll, setScroll] = useState(false);

    useMemo(() => {

        const onScroll = () => {
            if(window.scrollY > 50){
                setScroll(true);
            } else {
                 setScroll(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);


    }, []);

  return (
    <Navbar expand='lg' className={scroll ? "scrolled" : ""}>
        <Container>
            <Navbar.Brand href='#home'>
                <img src={logo} alt='logo' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' >
                <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                {
                    routes.map((route) => (
                        <Nav.Link
                            key={route.path} 
                            href={`#${route.path}`}
                            className={`navbar-link ${activeLink === route.path ? 'active' : ''}`}
                            onClick={() => setActiveLink(route.path)}
                            >
                                {route.name}
                        </Nav.Link>
                    ))
                }
              </Nav>
              <span className='navbar-text'>
                    <div className='social-icon'>
                        <a href='#'><img src={navIcon1} alt="" /></a>
                        <a href='#'><img src={navIcon2} alt="" /></a>
                        <a href='#'><img src={navIcon3} alt="" /></a>
                    </div>
                    <button className='vvd' onClick={() => console.log('click')}>
                        <span>
                            Let's Connect
                        </span>
                    </button>
                </span>  
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
