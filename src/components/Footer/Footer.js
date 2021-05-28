import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../images/logo3.png'

const Footer = () => {
    // AOS.init({
    //     duration: 1500
    // })
    return (
        <div className="footer-area">
            <div className="container">
                <div className="row">
                    <div data-aos="fade-right" className="col-md-3 col-sm-6">
                        <div className="address-icon">
                            <img src={logo} className="w-50 pb-4" alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="col-md-3 col-sm-6">
                        <div className="information">
                            <h4>Navigation</h4>
                            <ul>
                                <li><Link to="/home"><i class="fa fa-caret-right"></i> Home</Link></li>
                                <li><Link to="/about"><i class="fa fa-caret-right"></i> About</Link></li>
                                <li><Link to="/menu"><i class="fa fa-caret-right"></i> Menu</Link></li>
                                <li><Link to="/foods"><i class="fa fa-caret-right"></i> Foods</Link></li>
                                <li><Link to="/contact"><i class="fa fa-caret-right"></i> Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="col-md-3 col-sm-6">
                        <div className="latest-work">
                            <h4>Information</h4>
                            <ul>
                                <li><Link to="#"><i class="fa fa-caret-right"></i> Quality</Link></li>
                                <li><Link to="#"><i class="fa fa-caret-right"></i> Help</Link></li>
                                <li><Link to="#"><i class="fa fa-caret-right"></i> Share</Link></li>
                                <li><Link to="#"><i class="fa fa-caret-right"></i> Careers</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="col-md-3 col-sm-6">
                        <div className="quick-links">
                            <h4>Social Links</h4>
                            <ul>
                                <li><Link to="#"><FontAwesomeIcon icon={faFacebook} /> Facebook</Link></li>
                                <li><Link to="#"><FontAwesomeIcon icon={faInstagram} /> Instagram</Link></li>
                                <li><Link to="#"><FontAwesomeIcon icon={faYoutube} /> Youtube</Link></li>
                                <li><Link to="#"><FontAwesomeIcon icon={faTwitter} /> Twitter</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="col-md-12">
                        <p className="text-center">All rights reserved by Royal Kitchen</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;