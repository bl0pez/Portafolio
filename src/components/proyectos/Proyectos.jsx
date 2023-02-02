import { fechApi } from '../../hooks/fechApi';
import { CardProyect } from './CardProyect';
import './proyectos.css';
import { useContext } from 'react';
import { ScrollContext } from '../../context/ScrollContext';

export const Proyectos = () => {
    const { proyectosRef } = useContext(ScrollContext);

    const { filteredData,
        setFilter,
        loading } = fechApi('http://localhost:4000/api/github');


    if (loading) {
        return (
            <section ref={ proyectosRef } id="proyectos" className={`proyectos hidden`}>
                <h1>Cargando...</h1>
            </section>
        )
    }

    return (
        <section className="proyectos hidden" id='proyectos' ref={proyectosRef}>
            <div className="container proyectos__container">
                <h2 className="section__title">Proyectos</h2>
                <div className="proyecto__filter">
                    <button
                        onClick={() => setFilter('all')}
                        className={`proyecto__filter-btn`}
                    >Todos</button>
                    <button
                        onClick={() => setFilter('frontend')}
                        className={`proyecto__filter-btn`}
                    >Frontend</button>
                    <button
                        onClick={() => setFilter('backend')}
                        className={`proyecto__filter-btn`}
                    >Backend</button>
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
