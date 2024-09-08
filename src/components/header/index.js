import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
const Header = () => {
    return (
        <header className="header banner">
            <Container>
                <Row className='p-4'>
                    <Col className='logo col-3'>
                        <h5 className='fw-bolder'>TANISHA</h5>
                    </Col>
                    <Col className='col-9 navLinks align-content-center text-align-end'>
                        <NavLink to={'/'} className={'HeadLinks'}>Home</NavLink>
                        <NavLink to={'/about'} className={'HeadLinks'}>About</NavLink>
                        <NavLink to={'/Resume'} className={'HeadLinks'}>Resume</NavLink>
                        <NavLink to={'/services'} className={'HeadLinks'}>Services</NavLink>
                        <NavLink to={'/skills'} className={'HeadLinks'}>Skills</NavLink>
                        <NavLink to={'/projects'} className={'HeadLinks'}>Projects</NavLink>
                        <NavLink to={'/contact'} className={'HeadLinks'}>Contact</NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;
