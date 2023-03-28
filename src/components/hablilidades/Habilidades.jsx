import { useContext } from 'react';
import { ScrollContext } from '../../context/ScrollContext';
import { data } from './data';
import './habilidades.css';

export const Habilidades = () => {

    const { habilidadesRef } = useContext(ScrollContext);

    return (
        <section ref={habilidadesRef} id="habilidades" className={`habilidades hidden section`}>

            <div className='container habilidades__container'>
                <h2 className="section__title">Habilidades</h2>

                <div className="habilidades__grid">
                    {
                        data.map(({ id, name, icon }) => (
                            <div key={id} className='habilidades__item'>
                                <i className={icon}></i>
                                <p className="habilidades__name">{name}</p>
                            </div>
                        ))
                    }

                </div>
            </div>


        </section>
    )
}