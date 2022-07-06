import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";
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

function App() {
  const { chains, provider } = configureChains(
    [chain.rinkeby],
    [infuraProvider({ infuraId: process.env.INFURA_ID })]
  );

  const { connectors } = getDefaultWallets({
    appName: "Deals Game",
    chains,
  });

  const wagmiClient = createClient({
    // autoConnect: true,
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
          <History />
          {/* <HowTo /> */}
          <Calculate />
          <Process />
          <NoBody />
          <Footer />
        </ThemeProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
