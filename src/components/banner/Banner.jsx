import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { headerImage } from '../../assets/img';

export const Banner = () => {
    return (
        <section className='banner' id="home">
            <Container>
                <Row className='aling-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Bienvenido a mi portafolio</span>
                        <h1>{`Soy Bryan`}</h1><span className='wrap'>web developer</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, possimus.</p>
                        <button 
                            onClick={() => console.log('click')}
                            >Contactame <ArrowRightCircle size={25} /> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImage} alt="banner" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
