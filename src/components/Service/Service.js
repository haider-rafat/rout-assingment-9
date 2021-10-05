import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import SingleService from '../SingleService/SingleService';

const Service = ({ services }) => {

    return (
        <Container>
            <Row xs={1} md={2} lg={4} className="g-4">
                {
                    services?.map((service, index) => <SingleService key={index} service={service}></SingleService>)
                }
            </Row>
        </Container>
    );
};

export default Service;