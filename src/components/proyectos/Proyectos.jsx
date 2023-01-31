import './proyectos.css';
import { fechApi } from '../../hooks/fechApi';
import { useEffect } from 'react';

export const Proyectos = () => {

    const { getApi, data } = fechApi();

    useEffect(() => {
        getApi();
    }, []);

    return (
        <section className="proyectos">
            <div className="container proyectos__container">
                <h2 className="section__title">Proyectos</h2>
                <div className="proyectos__grid">
                    {
                        data.frontend?.map((proyecto) => (
                            <div className="proyectos__item">
                                <div className="proyectos__img">
                                    <img src={proyecto.image} alt="proyecto" className="proyectos__img" />
                                </div>
                                <div className="proyectos__info">
                                    <h3 className="proyectos__subtitle">{proyecto.name}</h3>
                                    <p className="proyectos__description">{proyecto.description}</p>
                                    <div className="proyectos__tags">
                                        {
                                            proyecto.topics.map((topic) => (
                                                <span className="proyectos__tag">{topic}</span>
                                            ))
                                        }
                                    </div>
                                    <div className="proyectos__links">
                                        {/* abrir en otro navegaro */}
                                        <a href={proyecto.image} target='_blank' rel='noreferrer' title='Ver imagen'>
                                            <i class="fas fa-image"></i>
                                        </a>
                                        <a href={proyecto.homepage} target='_blank' rel='noreferrer' title='Ver Proyecto'>
                                            <i class="fas fa-link"></i>
                                        </a>
                                        <a href=""><i class="fab fa-github"></i></a>
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </section>
    )
}
