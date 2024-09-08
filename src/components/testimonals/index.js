import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const TestimonalCard = ({ para, title }) => {
    return (
        <div className="card">
            <div className="layer">
            </div>
            <div className="content">
                <h2>{title}</h2>
                <FontAwesomeIcon icon={faLaptopCode} />
                <p>{para}</p>
            </div>
        </div>
    );
}

export default TestimonalCard;
