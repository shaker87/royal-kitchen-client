import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="content">
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          quis.
        </p>
      </div>

      <div className="main-content">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>Zila Super Market, Senbag, Noakhali</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fa fa-phone" aria-hidden="true"></i>
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>+88 01866568978</p>
              <p>+88 01866568978</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>example@gmail.com</p>
              <p>example@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="contactForm">
          <form>
            <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" name="full_name" required="required" />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="email" name="email" required="required" />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea required="required"></textarea>
              <span>Type your message...</span>
            </div>
            <div className="inputBox">
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
