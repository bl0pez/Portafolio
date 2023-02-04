import hero from '../../assets/img/hero/hero.svg'
import './inicio.css'
import { useContext } from 'react';
import { ScrollContext } from '../../context/ScrollContext';

export const Inicio = () => {
    const { inicioRef } = useContext(ScrollContext);

    return (
        <section className="container section-hero hidden section" id='inicio' ref={inicioRef}>

            <div className="section__hero-text">
                <h2>Hola, soy
                    <span className='section__hero-text--name'> Bryan </span>
                </h2>
                <h3>
                    Desarrollador web
                </h3>

                <div className="section__hero-text--redes">
                    <a>
                        <i className="fab fa-github"></i>
                    </a>
                    <a>
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a>
                        <i className="fab fa-tiktok"></i>
                    </a>
                </div>
            </div>

            <div className="section__hero-img">
                <img src={hero} alt="" />
            </div>




        </section>
    )
}
