import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import CountDown from "./components/CountDown";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <AboutUs />
      <CountDown />
    </ThemeProvider>
  );
}

export default App;
