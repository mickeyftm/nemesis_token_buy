import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Web3ReactProvider } from "@web3-react/core";
// import { ethers } from "ethers";
import Web3 from "https://cdn.esm.sh/v58/web3@1.6.1/es2021/web3.js";
import MetamaskProvider from "./helper/metamask";

function getLibrary(provider) {
  return new Web3(provider);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <MetamaskProvider>
      <App />
    </MetamaskProvider>
  </Web3ReactProvider>
);
