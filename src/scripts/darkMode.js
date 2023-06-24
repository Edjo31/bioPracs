import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";
import "../App.css";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export function useDarkMode() {
    const [darkModeS, setDarkMode] = useState("");
    const [imgSwitch, setImgSwitch] = useState(faMoon);
    const [isDarkMode, setIsdarkMode] = useState(false);

    useEffect(() => {
        const cachedDarkmode = localStorage.getItem("DarkMode");
        const cacheImgSwitch = localStorage.getItem("Duality");

        if (cacheImgSwitch) {
            setImgSwitch(JSON.parse(cacheImgSwitch));
        }
        if (cachedDarkmode) {
            setDarkMode(cachedDarkmode);
        }
    }, []);
    const SwitchDarkMode = () => {
        const switchMode = isDarkMode ? "" : "darkMode";
        const duality = isDarkMode ? faSun : faMoon;

        setImgSwitch(duality);

        setIsdarkMode(!isDarkMode);

        localStorage.setItem("Duality", JSON.stringify(duality));
        localStorage.setItem("DarkMode", switchMode);
        setDarkMode(switchMode);



    }
    return[darkModeS,imgSwitch,SwitchDarkMode]
}