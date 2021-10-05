import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-black text-white mt-5 py-5">
            <h5>SUPPORT FORUM</h5>
            <p>Write your email into below field and join quick support forum.</p>
            <InputGroup className="mb-3 w-50 mx-auto">
                <FormControl
                    placeholder="your email address"
                />
                <Button variant="success" id="button-addon2">
                    Button
                </Button>
            </InputGroup>
            <p>© All Right Reserved By - Saiful Islam</p>
        </footer>
    );
};

export default Footer;