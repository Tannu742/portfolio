import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col } from 'react-bootstrap';

const TestimonalCard = ({ para, title, iconName }) => {
    return (
        <Col xs={6}>
            <div className="card">
                <div className="layer">
                </div>
                <div className="content">
                    <h2>{title}</h2>
                    <FontAwesomeIcon icon={iconName} />
                    <p>{para}</p>
                </div>
            </div>
        </Col>
    );
}

export default TestimonalCard;
