import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import contact from '../../assets/img/contact.jpg';
import tanisha from '../../assets/img/img.png'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button, FloatingLabel } from 'react-bootstrap';
const Contact = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        setValidated(true);
      };
    return (
        <div className='container contact'>
            <div className='row text-align-center'>
                <span>Contact</span>
                <h2>CONTACT WITH ME</h2>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <Card>
                        <Card.Body>
                            <Card.Img variant="top" src={contact} />
                            <Card.Subtitle className="mb-2 text-muted"> Frontend Developer </Card.Subtitle>
                            <Card.Text>
                                I am  available for my profile. connect with me via and call in to my account.
                            </Card.Text>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item><a href="tel:91 7042429575"> +91 7042429575</a></ListGroup.Item>
                                <ListGroup.Item><a href="mailto:tanisharajput9575@gmail.com"> tanisharajput9575@gmail.com</a></ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        <Card.Title> <img width={250} src={tanisha} alt="" /> </Card.Title>
                    </Card>
                </div>
                <div className='col-6'>
                    <Card>
                        <Card.Body>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className='marginBottom_20'>
                                    <Col>
                                        <Form.Label>Yours Name</Form.Label>
                                        <Form.Control required placeholder="Name" />
                                    </Col>
                                    <Col>
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control required type='number' placeholder="Number" />
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control required type="email" placeholder="Enter email" />
                                </Form.Group>
                                <FloatingLabel
                                    controlId="floatingTextarea"
                                    label="Message"
                                    className="mb-3"
                                >
                                    <Form.Control required as="textarea" placeholder="Leave a Message here" />
                                </FloatingLabel>
                                <Button variant="outline-primary" className='text-uppercase contactBtn' type="submit">Submit</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Contact;
