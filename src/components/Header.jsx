import React from "react";
import { Link } from "react-router-dom";
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Pawism</h1>
        <p>Your next best friend is just a click away!</p>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/adopt">Adopt a Pet</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
