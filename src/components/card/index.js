import React from 'react';
import { Card } from "react-bootstrap";

const CardBox = ({ className, year, title, para }) => {
    return (
        <Card className={className}>
            <Card.Header>{year}</Card.Header>
            <Card.Title>{title}</Card.Title>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>{para}</p>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default CardBox;
