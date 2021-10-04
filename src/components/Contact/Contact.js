import Button from '@restart/ui/esm/Button';
import React from 'react';
import contact1 from '../../images/contact1.jpg';
import contact2 from '../../images/contact2.jpg';

const Contact = () => {
    const textStyle = {
        color: "#5F5982"
    };
    return (
        <div className="container mt-5">
            <div className="row gy-4">
                <div className="col-md-5 d-flex align-items-center justify-content-center">
                    <div>
                        <h5>CONTACT</h5>
                        <h1>Got a question about</h1>
                        <h1>using skilify?</h1>
                        <div className="my-4">
                            <h5>Pick from over 100,000 online video courses with new</h5>
                            <h5>additions published every month.</h5>
                        </div>
                        <Button type="button" className="btn btn-danger">Help Center</Button>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="d-flex align-items-center justify-content-center">
                        <img className="w-75" src={contact1} alt="" />
                    </div>
                </div>
            </div>
            <div className="row gy-4 my-5">
                <div className="col-md-7">
                    <div className="d-flex align-items-center justify-content-center">
                        <img className="w-75" src={contact2} alt="" />
                    </div>
                </div>
                <div className="col-md-5 d-flex align-items-center justify-content-center">
                    <div>
                        <h5>CONTACT</h5>
                        <h1>New York</h1>
                        <div style={textStyle} className="my-4">
                            <p>Our mission is to democratize education through the offering of world-class higher education opportunities that are accessible, flexible, and economical. Virtually anyone on the planet with an internet connection and a commitment to self-empowerment through learning can come to Skillify.</p>
                            <p><i className="fas fa-map-marker-alt"></i> 600 Harrison St. 3rd Floor San Francisco, CA 94107</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;