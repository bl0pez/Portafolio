import ola from '../../assets/img/hero/ola.svg'
import hero from '../../assets/img/hero/hero.svg'
import './inicio.css'

export const Inicio = () => {
    return (
        <section className="container section-hero" >

            <div className="section__hero-text">
                <h2>Hola, soy
                    <span className='section__hero-text--name'> Bryan </span>
                </h2>
                <h3>
                    Desarrollador web
                </h3>

                <div class="section__hero-text--redes">
                    <a>
                        <i class="fab fa-github"></i>
                    </a>
                    <a>
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a>
                        <i class="fab fa-tiktok"></i>
                    </a>
                </div>
            </div>

            <div className="section__hero-img">
                <img src={hero} alt="" />
            </div>




        </section>
    )
}
