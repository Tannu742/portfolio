import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import bg_1 from '../../assets/img/bg_1.png';
import bg_2 from '../../assets/img/bg_2.png';
const Slide = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className='text-center'>
            <Carousel.Item>
                <Row>
                    <Col className='col-6 p-5'>
                        <h6>HELLO!</h6>
                        <h1>I'am <span>Tanisha</span></h1>
                        <div className='py-3'>
                            <Button variant="primary" size="sm">
                                HIRE ME
                            </Button>{' '}
                            <Button variant="secondary" size="sm">
                                MY WORKS
                            </Button>
                        </div>
                    </Col>
                    <Col className='col-6'>
                        <img width={400} src={bg_1} alt="" />
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row>
                    <Col className='col-6 p-5'>
                        <h6>HELLO!</h6>
                        <h1>I'am <span>Frontend Developer</span></h1>
                        <div className='py-3'>
                            <Button variant="primary" size="sm" className='mx-1'>
                                HIRE ME
                            </Button>{' '}
                            <Button variant="secondary" size="sm" className='mx-1'>
                                MY WORKS
                            </Button>
                        </div>
                    </Col>
                    <Col className='col-6'>
                        <img width={400} src={bg_2} alt=""  />
                    </Col>
                </Row>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slide;