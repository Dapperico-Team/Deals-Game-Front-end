import React, { useContext } from "react";
import Sun from "../asset/Sun.svg";
import Moon from "../asset/Moon.svg";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="">
      {theme === "dark" ? (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <img src={Moon} alt="lightmode" />
        </div>
      ) : (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <img src={Sun} alt="darkmode" />
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
