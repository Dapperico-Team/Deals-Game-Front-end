import React, { useContext } from "react";
import Sun from "../asset/Sun.svg";
import Moon from "../asset/Moon.svg";
import { ThemeContext } from "../context/ThemeContext";
import "./themetoggle.css";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="">
      {theme === "dark" ? (
        <div
          className={
            theme === "light"
              ? "flex items-center cursor-pointer  moon-logo "
              : "flex items-center cursor-pointer  moon-logo animate-moon "
          }
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <img src={Moon} alt="lightmode" />
        </div>
      ) : (
        <div
          className={
            theme === "dark"
              ? "flex items-center cursor-pointer sun-logo  "
              : "flex items-center cursor-pointer sun-logo animate-sun "
          }
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <img src={Sun} alt="darkmode" />
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
