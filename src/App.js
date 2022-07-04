import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
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
import Modal from "./components/modal";

function App() {
  const [open, setOpen] = useState(false);
  const { chains, provider } = configureChains(
    [chain.mainnet],
    [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: "Deals Game",
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ThemeProvider>
          <Navbar />
          <Hero />
          <AboutUs />
          <CountDown />
          <GetNow />
          <Winners />
          <Won />
          {/* <History /> */}
          <HowTo />
          <Calculate />
          <Process />
          <NoBody />
          <Footer />
          <Modal open={open} setOpen={setOpen} />
        </ThemeProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
