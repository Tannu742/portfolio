import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { Links } from '../../constants/data';
import { handleScroll } from '../../utils';

const Header = () => {
    const links = useRef([]);

    useEffect(() => {
        handleScroll(links.current);
    }, []);
    return (
        <header className="header banner">
            <Container>
                <Row className='p-4'>
                    <Col className='logo col-3'>
                        <h5 className='fw-bolder'>TANISHA</h5>
                    </Col>
                    <Col className='col-9 navLinks align-content-center text-align-end'>
                        {
                            Links.map((item, i) => {
                                return (
                                    <Link ref={el => links.current[i] = el} to={item.path} key={item.id} className='head_links'>{item.link}</Link>
                                )
                            })
                        }
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;
