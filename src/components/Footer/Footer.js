import React from 'react';
import './Footer.css';
import logo from '../../images/logo3.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="logo">
              <img className="img-responsive w-100" src={logo} alt="" srcset="" />
              
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laborum commodi totam! Lorem ipsum dolor sit amet.</p>
             <button className="custom-btn">Read More</button>
            </div>
          </div>
          <div className="col-md-1">
            <h5>Links</h5>
            <ul>
              <Link></Link>
              <Link></Link>
              <Link></Link>
              <Link></Link>
              <Link></Link>
              <Link></Link>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>food3</h5>
          </div>
          <div className="col-md-2">
            <h5>food 4</h5>
          </div>
          <div className="col-md-5">
            <h5>food 5</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;