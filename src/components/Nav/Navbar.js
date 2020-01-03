import React, { useState } from "react";
import PropTypes from "prop-types";

const NavbarItem = props => (
  <a className="navbar-item is-capitalized" href={`#${props.page}`}>
    {props.page}
  </a>
);
const NavbarBurger = ({ toggleMenu, active }) => (
  <button
    onClick={toggleMenu}
    className={`button navbar-burger ${active ? "is-active" : ""}`}
  >
    <span />
    <span />
    <span />
  </button>
);

const Navbar = ({ pages = [], color }) => {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <nav className={`navbar has-shadow is-spaced ${color ? 'is-'+color : ''}`}>
      <div className="navbar-brand">
        <a className="navbar-item is-capitalized" href="home">
          YAAS
        </a>
        <NavbarBurger
          active={activeMenu}
          toggleMenu={() => setActiveMenu(!activeMenu)}
        />
      </div>
      <div className={`navbar-menu ${activeMenu ? "is-active" : ""}`}>
        <div className="navbar-start">
          {pages.map(page => (
            <NavbarItem page={page} key={page} />
          ))}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  pages: PropTypes.array.isRequired,
  color: PropTypes.string
};

export default Navbar;
