import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const footerBg = {
        backgroundColor: "#2f353b"
    }
    const linkHeaderStyle = {
        color: "white"
    }
    return (
        <div style={footerBg}>
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col">
                            <h2 style={linkHeaderStyle}>Courses</h2>
                                <div className="text-secondary">
                                    <Link className="text-decoration-none text-secondary" to="/courses"><h5>All course</h5></Link>
                                    <h5>Design</h5>
                                    <h5>Development</h5>
                                    <h5>Marketing</h5>
                                </div>
                            </div>
                            <div className="col">
                                <h2  style={linkHeaderStyle}>Pages</h2>
                                <div>
                                    <Link className="text-decoration-none text-secondary" to="/home"><h5>Home</h5></Link>
                                    <Link className="text-decoration-none text-secondary" to="/about"><h5>About</h5></Link>
                                    <Link className="text-decoration-none text-secondary" to="/courses"><h5>Courses</h5></Link>
                                    <Link className="text-decoration-none text-secondary" to="/contact"><h5>Contact</h5></Link>
                                    <Link className="text-decoration-none text-secondary" to="/*"><h5>404! page</h5></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col">
                            <h2 style={linkHeaderStyle}>Quick Links</h2>
                                <div>
                                    <a className="text-decoration-none text-secondary" href="https://www.facebook.com/"><h5><i className="fab fa-facebook"></i> Facebook</h5></a>
                                    <a className="text-decoration-none text-secondary" href="https://www.instragram.com/"><h5><i className="fab fa-instagram"></i> Instragram</h5></a>
                                    <a className="text-decoration-none text-secondary" href="https://www.twitter.com/"><h5><i className="fab fa-twitter"></i> Twitter</h5></a>
                                    <a className="text-decoration-none text-secondary" href="https://www.youtube.com/"><h5><i className="fab fa-youtube"></i> YouTube</h5></a>
                                </div>
                            </div>
                            <div className="col">
                                <h2  style={linkHeaderStyle}>Features</h2>
                                <div className="text-secondary">
                                    <h5>Course Detail</h5>
                                    <h5>FAQ</h5>
                                    <h5>Blogs</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="text-white" />
                <div className="text-center">
                    <small className="text-secondary">© 2021 Skilify academy Private Limited. All rights reserved</small>
                </div>
            </div>
        </div>
    );
};

export default Footer;