import React from 'react';
import { Link } from 'react-router-dom';


function Header(){
  
   return(
    <header>
        <nav className="main-nav">
        <Link to="/" className="main-nav-item">
        <h1>V.M</h1>
        </Link>
          <div className='items'>
            <Link to="/projects" className="main-nav-item">
            Projets
        </Link>
        <a href="#footer" className="main-nav-item">
            Contact
        </a>
        <Link to="https://github.com/Eiko1993" className="main-nav-item">
            GitHub
        </Link>
          </div>

    </nav>
  </header>
   )
}
export default Header;