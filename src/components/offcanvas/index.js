import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import tanisha from '../../assets/img/maxresdefault.jpg'
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
                        <img width={180} height={80} className='borderRadius_5'src={tanisha} alt="name" />
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