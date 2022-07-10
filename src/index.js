import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@fontsource/rubik";
import "@fontsource/rubik/500.css";
import "@fontsource/rubik/400.css";
import "@fontsource/rubik/700.css";
import "@rainbow-me/rainbowkit/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Dashboard from "./components/dashboard/Admin";
import Lottery from "./components/dashboard/Lottery";
import Price from "./components/dashboard/Price";
import Status from "./components/dashboard/Status";
import Validate from "./components/dashboard/Validate";
import Compelete from "./components/dashboard/Complete";
import Calculate from "./components/dashboard/Calculate";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="lottery" element={<Lottery />} />
        <Route path="status" element={<Status />} />
        <Route path="price" element={<Price />} />
        <Route path="validate" element={<Validate />} />
        <Route path="compelete" element={<Compelete />} />
        <Route path="calculate" element={<Calculate />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
