import { useEffect, useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { ScrollContext } from './ScrollContext'

export const ScrollProvider = ({ children }) => {

    const inicioRef = useRef(null);
    const habilidadesRef = useRef(null);
    const proyectosRef = useRef(null);
    const contactoRef = useRef(null);

    useOnScreen(inicioRef, { rootMargin: '0px 0px -50% 0px' });
    useOnScreen(habilidadesRef, { rootMargin: '0px 0px -50% 0px' });
    useOnScreen(proyectosRef, { rootMargin: '0px 0px -50% 0px' });
    useOnScreen(contactoRef, { rootMargin: '0px 0px -50% 0px' });


    //Controla el scroll y activa el link correspondiente
    const activeSection = () => {
        let section = document.querySelectorAll('.section');
        const linkItems = document.querySelectorAll('.nav_item');

        window.onscroll = () => {
            section.forEach((seccion) => {
                let top = window.scrollY;
                let offset = seccion.offsetTop - 300;
                let height = seccion.offsetHeight;
                let id = seccion.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    linkItems.forEach(links => {
                        if (links.classList.contains('linkActive')) {
                            links.classList.remove('linkActive');
                        } else {
                            links.classList.remove('linkActive');
                        }

                        if (links.querySelector('a').getAttribute('href') === `#${id}`) {
                            links.classList.add('linkActive');
                        }
                    });
                }
            })
        };
    }

    useEffect(() => {

        activeSection();

        return () => {
            window.onscroll = null;
        }


    }, []);

    return (
        <ScrollContext.Provider value={{
            inicioRef,
            habilidadesRef,
            proyectosRef,
            contactoRef,
        }}>
            {children}
        </ScrollContext.Provider>
    )

}