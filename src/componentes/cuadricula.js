import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDarkMode } from "../scripts/darkMode"; 

import "../App.css";

function Cuadricula() {
  const [darkModeS, imgSwitch, switchDarkMode] = useDarkMode(); 

  return (
    <body>
      <div className="cuadricula ">
        <FontAwesomeIcon
          className="toogleDarkMode"
          icon={imgSwitch}
          onClick={switchDarkMode} // Usar la función del modo oscuro
        ></FontAwesomeIcon>

        <section className={"console " + darkModeS}>
          <section className={darkModeS + " console-info"}>
            <section className={" console-info-text"}>
              <h1>Lorem Ipsum</h1>
              <h1>Ingeniero en sistema</h1>
            </section>
          </section>
          <section className="console-info-bio"></section>
        </section>
      </div>
    </body>
  );
}

export default Cuadricula;
