/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../assets/Logo.png";
import "./Navbar.css";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} className="logo-img" />
      </div>

      <nav>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#">Track</a>
          </li>
          <li className="navbar-item">
            <a href="#">Careers</a>
          </li>
          <li className="navbar-item">
            <a href="#">About Us</a>
          </li>
          <li className="navbar-item">
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="search">
          <FiSearch className="seach-icon" />
          <input placeholder="search" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
