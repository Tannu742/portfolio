import React, { useEffect, useRef } from 'react';
import { Links } from '../../constants/data';
import { handleScroll } from '../../utils';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    const links = useRef([]);

    useEffect(() => {
        handleScroll(links.current);
    }, []);

    return (
        <Navbar collapseOnSelect expand="lg" className="header">
            <Container>
                <Navbar.Brand href="" className='fw-bolder logo'>TANISHA</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        {
                            Links.map((item, i) => {
                                return (
                                    <Nav.Link ref={el => links.current[i] = el} href={item.path} key={item.id} className='head_links navLinks'>{item.link}</Nav.Link>
                                )
                            })
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

// <header className="header banner">
//     <Container>
//         <Row className='p-4'>
//             <Col className='logo col-3'>
//                 <h5 className='fw-bolder'>TANISHA</h5>
//             </Col>
//             <Col className='col-9 navLinks align-content-center text-align-end'>
//                 {
//                     Links.map((item, i) => {
//                         return (
//                             <Link ref={el => links.current[i] = el} to={item.path} key={item.id} className='head_links'>{item.link}</Link>
//                         )
//                     })
//                 }
//             </Col>
//         </Row>
//     </Container>
// </header>

export default Header;
