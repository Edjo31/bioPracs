import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDarkMode } from "../scripts/darkMode"; 
import { Link } from "react-router-dom/cjs/react-router-dom.min";
 function NavBar({ switchDarkMode }){





    const [darkModeS, imgSwitch] = useDarkMode(); 
    return (
        <div className="nav-container">
          <section className="darkMode-container">
            <FontAwesomeIcon
              className="toogleDarkMode"
              icon={imgSwitch}
              onClick={switchDarkMode}
            ></FontAwesomeIcon>
          </section>

          <section className="casa">
          <Link to="/proyectos">Ir a Proyectos</Link>
            
          </section>
        </div>
      );
}

export default NavBar