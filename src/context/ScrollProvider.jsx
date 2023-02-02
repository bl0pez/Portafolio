import { useEffect, useMemo, useRef, useState } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { ScrollContext } from './ScrollContext'

export const ScrollProvider = ({ children }) => {

    const inicioRef = useRef();
    const habilidadesRef = useRef();
    const proyectosRef = useRef();
    const contactoRef = useRef();

    const [activeLink, setActiveLink] = useState('inicio');

    useOnScreen(inicioRef, { rootMargin: '0px 0px -50% 0px' }, setActiveLink);
    useOnScreen(habilidadesRef, { rootMargin: '0px 0px -50% 0px' }, setActiveLink);
    useOnScreen(proyectosRef, { rootMargin: '0px 0px -50% 0px' }, setActiveLink);
    //useOnScreen(contactoRef, { rootMargin: '0px 0px -50% 0px' });


    const onSelectLink = useMemo(() => {
        return (section) => {
            setActiveLink(section);
            window.location.hash = section;
        };
    }, [activeLink]);

    const handleScroll = useMemo(() => {
        return () => {
            //Creamos un array con los refs
            const refs = [inicioRef, habilidadesRef, proyectosRef, contactoRef];


            //Recorremos el array de refs
            refs.forEach((ref) => {
                //Si el ref no existe, retornamos
                if (!ref.current) return;
                //Obtenemos la posición del elemento
                const sectionTop = ref.current.offsetTop;
                //Obtenemos la altura del elemento
                const sectionHeight = ref.current.clientHeight;
                //Obtenemos la posición del scroll
                const scrollPosition = window.scrollY;

                //Si la posición del scroll es mayor o igual a la posición del elemento
                if (
                    scrollPosition >= sectionTop - sectionHeight * 0.25 &&
                    scrollPosition <= sectionTop + sectionHeight - sectionHeight * 0.25
                ) {
                    //Actualizamos el estado del link activo
                    onSelectLink(ref.current.id);
                }
            });
        };
    }, [inicioRef, habilidadesRef, proyectosRef, contactoRef, setActiveLink]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <ScrollContext.Provider value={{
            inicioRef,
            habilidadesRef,
            proyectosRef,
            contactoRef,
            activeLink,
            //Métodos
            onSelectLink,

        }}>
            {children}
        </ScrollContext.Provider>
    )

}