import React from 'react';
import { Link } from 'react-router-dom';


function Header(){
  
   return(
    <header>
        <nav className="main-nav">
        <Link to="/" className="main-nav-item">
        <h1>Vincent Merah</h1>
        </Link>
          <div className='items'>
          <Link to="/" className="main-nav-item">
            Présentation
        </Link>
        <Link to="/projects" className="main-nav-item">
            Projets
        </Link>
        <Link to="/contacts" className="main-nav-item">
            Contact
        </Link>
          </div>

    </nav>
  </header>
   )
}
export default Header;