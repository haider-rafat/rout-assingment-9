import React from 'react';
import AboutImg from '../../image/img-2.jpg'

const AboutUs = () => {
    return (
        <div className='row my-5'>
            <div className="col-md-6 mt-5">
                <h1>Want to know more</h1>
                <p>There arge many variations ohf passages of sorem gpsum ilable, but the majority have suffered alteration in some form, by ected humour, or randomised words whi.</p>
                <p> 01. Creative ideas base</p>
                <p> 02. Assages of sorem gpsum ilable</p>
                <p> 03. Have suffered alteration in so</p>
                <p> 04. Randomised words whi</p>
            </div>
            <div className="col-md-6">
                <img src={AboutImg} alt="" />
            </div>
        </div>
    );
};

export default AboutUs;