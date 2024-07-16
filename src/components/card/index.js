import React from 'react';
import { Card } from "react-bootstrap";

const CardBox = ({className, title, img, text, footerText }) => {
    return (
        <Card className={className}>
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p className="text-align-center">
                        {' '}<img src={img} alt="" />{' '}
                    </p>
                    <footer className="blockquote-footer">
                        {footerText}<cite title="Source Title">{text}</cite>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default CardBox;
