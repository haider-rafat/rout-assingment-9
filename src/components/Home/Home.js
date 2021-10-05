import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import SingleService from '../SingleService/SingleService';
import './Home.css'


const Home = ({ services }) => {

    return (
        <div>
            <div className="img">
                <div className="col-md-6 p-10 left">
                    <p>Popular Onlince Courses</p>
                    <h1>The New Way To </h1>
                    <h1> Learn Properly in </h1>
                    <h1>With Us!</h1>
                    <Button variant="success">Get Started</Button>{' '}
                </div>
                <div className="col-md-6 ">
                </div>
            </div>
            <Container>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {
                        services?.map((service, index) => <SingleService key={index} service={service}></SingleService>)
                    }
                </Row>
            </Container>
        </div>

    );
};

export default Home;