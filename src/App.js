import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import AboutUs from "./components/AboutUs";
import CountDown from "./components/countDown/CountDown";
import HowTo from "./components/howto/HowTo";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <AboutUs />
      <CountDown />
      <HowTo />
    </ThemeProvider>
  );
}

export default App;
