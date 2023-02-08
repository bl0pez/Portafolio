import { useContext, useState } from 'react';

import { useFechApi } from '../../hooks/useFechApi';
import { CardProyect } from './CardProyect';
import { ScrollContext } from '../../context/ScrollContext';
import { items } from './itemFilter';

import './proyectos.css';

export const Proyectos = () => {
    const { proyectosRef } = useContext(ScrollContext);
    const [active, setActive] = useState("all");

    const { filteredData, setFilter, loading } = useFechApi(`${import.meta.env.VITE_URL_BACKEND}/portafolio`);

    const handleFilter = (filter) => {
        setFilter(filter);
        setActive(filter);
    }


    if (loading) {
        return (
            <section ref={ proyectosRef } id="proyectos" className={`proyectos hidden section`}>
                <h1>Cargando...</h1>
            </section>
        )
    }

    return (
        <section className="proyectos hidden section" id='proyectos' ref={proyectosRef}>
            <div className="container proyectos__container">
                <h2 className="section__title">Proyectos</h2>
                <div className="proyecto__filter">
                    {
                        items.map((filter) => (
                            <button 
                                key={filter.id} 
                                onClick={() => handleFilter(filter.filter)} 
                                className={`proyecto__filter-btn 
                                ${active === filter.filter && "active-filter"}`}>{filter.name}</button>
                        ))
                    }
                </div>
                <div className="proyectos__grid">
                    {
                        filteredData.map((proyecto) => (
                            <CardProyect key={proyecto._id.toString()} {...proyecto} />
                        ))
                    }
                </div>
            </div>

        </section>
    )
}
