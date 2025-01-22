'use client'; // Mark as a Client Component

import React, { useState } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { FaUserNinja } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen((prev) => !prev);
  };

  return (
    <header className="header" data-header>
      <div className="header-top">
        <div className="container">
          {/* Logo */}
          <Link href="#" className="logo">
            <Image
              src="/assets/images/ninja.png"
              width={80}
              height={20}
              alt="NinjaReader home"
            />
          </Link>

          {/* Search Input */}
          <div className="input-wrapper">
            <input
              type="search"
              name="search"
              placeholder="Search our store"
              className="input-field"
            />
            <button className="btn btn-primary">Search</button>
          </div>

          {/* Header Actions */}
          <div className="header-action">
            <button
              className="header-action-btn"
              aria-label="cart"
              title="Cart"
            >
              <span className="span">0</span>
              <FaCartShopping name="bag-handle-outline" aria-hidden="true" />
            </button>

            <button
              className="nav-open-btn"
              aria-label="open menu"
              title="Open Menu"
              onClick={toggleNavbar}
              data-nav-toggler
            >
              <IoMdMenu name="menu-outline" aria-hidden="true" />
            </button>

            <button
              className="header-action-btn"
              aria-label="user"
              title="User"
            >
              <FaUserNinja name="person-outline" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div
        className={`header-bottom ${isNavbarOpen ? 'active' : ''}`}
        data-navbar
      >
        <div className="container">
          <nav className="navbar">
            <button
              className="nav-close-btn"
              onClick={toggleNavbar}
              data-nav-toggler
              aria-label="close menu"
              title="Close Menu"
            >
              <HiMiniBars3BottomRight name="close-outline" aria-hidden="true" />
            </button>

            {/* Navbar Search */}
            <div className="navbar-top">
              <input
                type="search"
                name="search"
                placeholder="Search our store"
                className="input-field"
              />
              <button className="search-btn" aria-label="Search">
                <FaSearch name="search-outline" aria-hidden="true" />
              </button>
            </div>

            {/* Navbar Links */}
            <ul className="navbar-list">
              <li>
                <Link href="#" className="navbar-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="navbar-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="navbar-link">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="#" className="navbar-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="navbar-link">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact Link */}
          <a href="tel:+254762804598" className="header-contact-link">
            <FaPhone name="headset-outline" aria-hidden="true" />
            <span className="span">(+254)-762-804-598</span>
          </a>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`overlay ${isNavbarOpen ? 'active' : ''}`}
        data-overlay
        data-nav-toggler
        onClick={toggleNavbar}
      ></div>
    </header>
  );
};

export default Header;