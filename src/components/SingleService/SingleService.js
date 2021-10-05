import React from 'react';
import { Card, Col } from 'react-bootstrap';

const singleService = ({ service }) => {
    const { title, img, description } = service
    return (
        <div>
            <Col >
                <Card className="mt-5">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default singleService;