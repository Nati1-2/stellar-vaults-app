import React, { useEffect, useState } from "react";
import StellarSdk from "stellar-sdk";

const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");

export default function AccountInfo({ walletAddress }) {
  const [balances, setBalances] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!walletAddress) return;
    setBalances([]);
    server
      .accounts()
      .accountId(walletAddress)
      .call()
      .then((account) => setBalances(account.balances))
      .catch(() => setError("Failed to load account info."));
  }, [walletAddress]);

  if (!walletAddress) return <p>Please connect a wallet.</p>;

  return (
    <div>
      <h2>Account Info</h2>
      {error && <p className="error">{error}</p>}
      <ul>
        {balances.map((bal, i) => (
          <li key={i}>
            {bal.asset_type === "native" ? "XLM" : bal.asset_code}: {bal.balance}
          </li>
        ))}
      </ul>
    </div>
  );
}
