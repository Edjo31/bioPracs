import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDarkMode } from "../scripts/darkMode"; 
import NavBar from "./navBar";

import "../App.css";

function Cuadricula() {
  const [darkModeS, imgSwitch, switchDarkMode] = useDarkMode(); 

  return (
    <body>
         <NavBar switchDarkMode={switchDarkMode} />
      <div className="cuadricula ">
   

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
