import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const getNavLinkClass = ({ isActive }) =>
    `main-nav-item ${isActive ? 'active' : ''}`;

  return (
    <header>
      <nav className="main-nav" aria-label="Navigation principale">
        <NavLink to="/" className="brand-link">
          <h1>Vincent Merah</h1>
        </NavLink>

        <div className="items">
          <NavLink to="/" end className={getNavLinkClass}>
            Présentation
          </NavLink>
          <NavLink to="/projects" className={getNavLinkClass}>
            Projets
          </NavLink>
          <NavLink to="/contacts" className={getNavLinkClass}>
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;