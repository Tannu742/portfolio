import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TestimonalCard = ({ para, title, iconName }) => {
    return (
        <div className="card">
            <div className="layer">
            </div>
            <div className="content">
                <h2>{title}</h2>
                <FontAwesomeIcon icon={iconName} />
                <p>{para}</p>
            </div>
        </div>
    );
}

export default TestimonalCard;
