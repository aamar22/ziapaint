import React, { useState } from 'react';
import '../Style/header.css'

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="https://aapkapainter.com/assets/images/logoNew.webp" alt="Logo" />
      </div>
      <nav className="nav">
        <ul>
       
          <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <a href="/services">PRODUCTS</a>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><a href="/web-development">Web Development</a></li>
                <li><a href="/app-development">App Development</a></li>
                <li><a href="/digital-marketing">Digital Marketing</a></li>
              </ul>
            )}
          </li>
          <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <a href="/services">SERVIVICES</a>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><a href="/web-development">Web Development</a></li>
                <li><a href="/app-development">App Development</a></li>
                <li><a href="/digital-marketing">Digital Marketing</a></li>
              </ul>
            )}
          </li>
          <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <a href="/services">RESOURCES</a>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><a href="/web-development">Web</a></li>
                <li><a href="/app-development">App</a></li>
                <li><a href="/digital-marketing">Digital</a></li>
              </ul>
            )}
          </li>
          <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <a href="/services">SHADE CARDS</a>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><a href="/web-development">Web</a></li>
                <li><a href="/app-development">App</a></li>
                <li><a href="/digital-marketing">Digital</a></li>
              </ul>
            )}
          </li>
          <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <a href="/services">WALL PAINTING IDEAS</a>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><a href="/web-development">Web</a></li>
                <li><a href="/app-development">App</a></li>
                <li><a href="/digital-marketing">Digital</a></li>
              </ul>
            )}
          </li>
          <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <a href="/services">COLOR COMINATIONS</a>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><a href="/web-development">Web</a></li>
                <li><a href="/app-development">App</a></li>
                <li><a href="/digital-marketing">Digital</a></li>
              </ul>
            )}
          </li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;




