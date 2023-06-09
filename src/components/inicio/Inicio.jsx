import { useContext } from 'react';

import { ScrollContext } from '../../context/ScrollContext';
import hero from '../../assets/img/hero/hero.svg'

import './inicio.css'

export const Inicio = () => {
    const { inicioRef } = useContext(ScrollContext);

    return (
        <section className="container section-hero hidden section" id='inicio' ref={inicioRef}>

            <div className="section__hero-text">
                <h1>Hola, soy
                    <span className='section__hero-text--name'> Bryan </span>
                </h1>
                <h2>
                    Desarrollador web fullstack
                </h2>

                <div className="section__hero-text--redes">
                    <a href="https://github.com/bl0pez" target='_blank' rel='noreferrer' title='Ver github'>
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/bryan-l%C3%B3pez-s%C3%A1nchez/" target='_blank' rel='noreferrer' title='Ver linkedin'>
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.tiktok.com/@blopez_dev" target='_blank' rel='noreferrer' title='Ver tiktok'>
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
