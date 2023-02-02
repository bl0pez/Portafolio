export const CardProyect = ({ name, description, topics, image, homepage, html_url}) => {
  return (
        <div className="proyectos__item">
            <div className="proyectos__img">
                <img src={image} alt="proyecto" className="proyectos__img" />
            </div>
            <div className="proyectos__info">
                <h3 className="proyectos__subtitle">{name}</h3>
                <p className="proyectos__description">{description}</p>
                <div className="proyectos__tags">
                    {
                        topics.map((topic) => (
                            <span
                                key={topic}  
                                className="proyectos__tag">{topic}</span>
                        ))
                    }
                </div>
                <div className="proyectos__links">
                    {/* abrir en otro navegaro */}
                    <a href={image} target='_blank' rel='noreferrer' title='Ver imagen'>
                        <i className="fas fa-image"></i>
                    </a>
                    <a href={homepage} target='_blank' rel='noreferrer' title='Ver Proyecto'>
                        <i className="fas fa-link"></i>
                    </a>
                    <a href={html_url} target='_blank' rel='noreferrer' title='Ver Repositorio'><i className="fab fa-github"></i></a>
                </div>

            </div>
        </div>
  )
}
