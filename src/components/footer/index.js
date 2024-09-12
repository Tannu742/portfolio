import React from 'react';
import heart from '../../assets/img/heart.svg'
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <div className='footer p-5'>
                <Row className='m-0 justify-content-between'>
                    <Col>
                        <h5>About</h5>
                        <p>Our portfolio reflects our dedication to frontend
                            development through innovative design and flawless execution.</p>
                    </Col>
                    <Col>
                        <h5>Have a Questions?</h5>
                        <ul className='list-unstyled'>
                            <li><FontAwesomeIcon className='icon my-2' icon={faLocationPin} /> Najafgarh, New Delhi</li>
                            <li><FontAwesomeIcon className='icon my-2' icon={faPhone} /><Link to={'tel:+91 7042429575'}> +91 7042429575</Link></li>
                            <li><FontAwesomeIcon className='icon my-2' icon={faPaperPlane} /><Link to={'mailto:tanisharajput9575@gmail.com'}> tanisharajput9575@gmail.com</Link></li>
                        </ul>
                    </Col>
                </Row>
            </div>
            <div className='footerFoot'>
                <Row className='text-center m-0'>
                    <h6>Copyright ©2024 All rights reserved | This template is made with <img src={heart} width={20} alt="" /> by Tanisha</h6>
                </Row>
            </div>
        </>
    );
}

export default Footer;
