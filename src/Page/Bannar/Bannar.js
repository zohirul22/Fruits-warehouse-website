import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannar1 from '../../../src/img/bannar/fruite.png';
import bannar2 from '../../../src/img/bannar/fruite1.png';
import bannar3 from '../../../src/img/bannar/fruite2.png';


const Bannar = () => {
    return (
        <div>
            <Carousel fade >
                <Carousel.Item>
                    <img style={{ height: '450px' }}
                        className="d-block w-100"
                        src={bannar1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Best Quality</h3>
                        <p>The new fresh fruit, vegetable and greens warehouse </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '450px' }}
                        className="d-block w-100"
                        src={bannar2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Fresh Fruit</h3>
                        <p>We are not your average fruit importers.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '450px' }}
                        className="d-block w-100"
                        src={bannar3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Original Fruit</h3>
                        <p>This fruit is really original.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Bannar;