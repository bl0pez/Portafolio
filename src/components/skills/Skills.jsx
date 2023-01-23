import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { colorSharp, meter1, meter2, meter3 } from '../../assets/img';




export const Skills = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className='skill' id="skills">
      <Container>
        <Row>
          <Col>
            <div className='skill-bx wow zoomIn'>
              <h2>
                Skills
              </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, at!
              </p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="image" />
                  <h5>Web Development</h5>
                </div>
              

              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className='background-image-left' src={colorSharp} alt="image" />
    </section>
  )
}
