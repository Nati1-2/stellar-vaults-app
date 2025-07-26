import React, { useState } from "react";
import { isConnected, getPublicKey } from "@stellar/freighter-api";
import Vaults from "./components/Vaults";
import AccountInfo from "./components/AccountInfo";


function App() {
  const [view, setView] = useState("vaults");
  const [walletAddress, setWalletAddress] = useState("");
  const [walletError, setWalletError] = useState("");
  const [manualAddress, setManualAddress] = useState("");

  const connectWallet = async () => {
    try {
      const detected = await isConnected();
      if (!detected) {
        setWalletError("Freighter not installed. Get it at https://www.freighter.app/");
        return;
      }

      let publicKey = null;
      try {
        publicKey = await getPublicKey();
      } catch {
        setWalletError("Please approve Freighter in the popup.");
      }

      if (publicKey) {
        setWalletAddress(publicKey);
        setWalletError("");
      }
    } catch {
      setWalletError("Failed to connect to Freighter.");
    }
  };

  const useManualAddress = () => {
    if (manualAddress.startsWith("G") && manualAddress.length === 56) {
      setWalletAddress(manualAddress);
      setWalletError("");
    } else {
      setWalletError("Invalid Stellar address.");
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Stellar Vaults</h1>
        <nav>
          <button onClick={() => setView("vaults")}>Vaults</button>
          <button onClick={() => setView("dashboard")}>Dashboard</button>
          <button onClick={connectWallet}>
            {walletAddress ? "Wallet Connected" : "Connect Freighter"}
          </button>
        </nav>
      </header>

      {walletError && <p className="error">{walletError}</p>}

      {walletAddress ? (
        <p className="message">Connected: {walletAddress.slice(0, 8)}...</p>
      ) : (
        <div className="manual-address">
          <input
            type="text"
            placeholder="Enter Stellar Address (G...)"
            value={manualAddress}
            onChange={(e) => setManualAddress(e.target.value)}
          />
          <button onClick={useManualAddress}>Use Address</button>
        </div>
      )}

      <main>
        {view === "vaults" ? (
          <Vaults walletAddress={walletAddress} />
        ) : (
          <AccountInfo walletAddress={walletAddress} />
        )}
      </main>
    </div>
  );
}

export default App;
