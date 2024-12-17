import React from 'react';
import "../Assets/CSS/main.css";
import { Link } from 'react-router-dom';

function Formation(){
    return (
        <div>
          <h2>Formation</h2>
          <ul className='formations'>
            <li>
              <strong>[OpenClassrooms]</strong> - <Link to="https://openclassrooms.com/fr/paths/900-integrateur-web">[Intégrateur Web]</Link>(2024)
            </li>
          </ul>
        </div>
      );
}

export default Formation
;