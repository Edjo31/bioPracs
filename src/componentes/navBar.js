import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDarkMode } from "../scripts/darkMode"; 
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
       <a href=""  > hola</a>
            
          </section>
        </div>
      );
}

export default NavBar