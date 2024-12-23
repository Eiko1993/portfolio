import React from "react";
import { Link } from 'react-router-dom';
import "../Assets/CSS/main.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>Vincent Merah</p>
        </div>
        <div className="footer-center">
          <p>📞 +33 7 84 98 84 23</p>
          <Link to="/contacts" className="footer-link">Contactez-moi</Link>
        </div>
        <div className="footer-right">
          <a href="https://github.com/Eiko1993" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/vincent-merah-a23882199/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;