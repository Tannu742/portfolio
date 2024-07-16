import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import tanisha from '../../assets/img/9d856d1cabeb41e98e8a27479bf21109.jpg'
import Offcanvas from 'react-bootstrap/Offcanvas';
import avatar from '../../assets/img/office.png'
const OffCanvas = ({ name, ...props }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <FontAwesomeIcon className='offcanvasBtn' icon={faBars} onClick={handleShow} />
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='text-align-center'>
                        <img width={250} src={avatar} alt="profile" />
                        <img width={250} src={tanisha} alt="" />
                        <p>I am Eager to bring my Expertise to your team and contribute to the continued success or your company</p>
                    </div>
                    <div className='offLayLinks'>
                        <Link to={'/'}>HOME</Link>
                        <Link to={'/about'}>ABOUT</Link>
                        <Link to={'/services'}>SERVICES</Link>
                        <Link to={'/skills'}>SKILLS</Link>
                        <Link to={'/contact'}>CONTACT</Link>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
export default OffCanvas;