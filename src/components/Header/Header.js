import React from "react";
import "./Header.css";
import $ from "jquery";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo3.png";

const Header = () => {
  //Sticky Navigation
  $(window).on("scroll", () => {
    $(window).scrollTop() >= 50
      ? $(".sticky").addClass("stickyAdd")
      : $(".sticky").removeClass("stickyAdd");
  });

  return (
    <header id="header" className="sticky">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="logo">
            <img className="logo" src={logo} alt="" />
          </Link>
          <input type="checkbox" className="navbarCheckbox" id="navToggle" />
          <label htmlFor="navToggle" className="navbarButton">
            <span className="navbarIcons">&nbsp;</span>
          </label>
          <ul className="navbarMenu">
            <li>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink exact to="/about">
                About
              </NavLink>
            </li>

            <li>
              <NavLink exact to="/foods">
                Foods
              </NavLink>
            </li>

            <li>
              <NavLink exact to="/menu">
                Menu
              </NavLink>
            </li>

            <li>
              <NavLink exact to="/contact">
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink exact to="/cart">
                <i className="fa" style={{ fontSize: "24px" }}>
                  &#xf07a;
                </i>
                <span> 5 </span>
              </NavLink>
            </li>
          </ul>{" "}
          {/* Navbar Menu */}
        </div>{" "}
        {/* Container */}
      </nav>{" "}
      {/* Navbar */}
    </header> // Header
  );
};

export default Header;
