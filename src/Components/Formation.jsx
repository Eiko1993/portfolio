import React from 'react';
import "../Assets/CSS/main.css";
import { Link } from 'react-router-dom';

function Formation(){
    return (
        <div>
          <h2>Formations</h2>
          <ul className='formations'>
            <li>
              <strong>[OpenClassrooms]</strong> - <a href="https://openclassrooms.com/fr/paths/900-integrateur-web" className="main-nav-item" target="_blank">[Intégrateur Web]</a>(2024)
            </li>
          </ul>
        </div>
      );
}

export default Formation
;