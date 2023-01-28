import { data } from './data';
import './Habilidades.css';

export const Habilidades = () => {
  return (
    <section id="habilidades" className='habilidades'>

    <div className='container habilidades__container'>
        <h2 className="section__title">Habilidades</h2>

        <div className="habilidades__grid">
            {
                data.map(({ id, name, icon }) => (
                    <div key={id} className='habilidades__item'>
                        <i class={icon}></i>
                        <p className="habilidades__name">{name}</p>
                    </div>
                ))
            }

        </div>
    </div>


</section>
  )
}