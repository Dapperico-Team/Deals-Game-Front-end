import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import AboutUs from "./components/AboutUs";
import CountDown from "./components/countDown/CountDown";
import HowTo from "./components/howto/HowTo";
import Calculate from "./components/Calculate";
import Process from "./components/process/Process";
import NoBody from "./components/NoBody";
import Won from "./components/won/Won";
import Footer from "./components/Footer";
import GetNow from "./components/GetNow";
import Winners from "./components/Winners";
import History from "./components/History";

function App() {
  return (
    <ThemeProvider>
      {/* <Navbar /> */}
      <Hero />
      <AboutUs />
      <CountDown />
      <GetNow />
      <Winners />
      <Won />
      <History />
      <HowTo />
      <Calculate />
      <Process />
      <NoBody />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
