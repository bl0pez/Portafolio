import { useEffect } from 'react';

export const useOnScreen = (ref, options) => {

    const observer = new IntersectionObserver(([entry]) => {
        if(entry.isIntersecting) {
            ref.current.classList.add('showAnimation');
        }else{
            ref.current.classList.remove('showAnimation');
        }
        
    }, options);

    useEffect(() => {
        //Obseva todos los que tienen la clase hidden
        observer.observe(ref.current);
        return () => {
            observer.unobserve(ref.current);
        };
    }, []);

};