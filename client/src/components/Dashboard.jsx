import React, { useState } from "react";

function Dashboard({ walletAddress }) {
  const [portfolio, setPortfolio] = useState(null);
  const [message, setMessage] = useState("");

  const loadPortfolio = async () => {
    if (!walletAddress) {
      setMessage("Please connect your wallet first.");
      return;
    }
    try {
      const res = await fetch(`http://localhost:4000/api/user/${walletAddress}`);
      const data = await res.json();
      setPortfolio(data);
      setMessage("");
    } catch (err) {
      console.error(err);
      setMessage("Failed to load portfolio.");
    }
  };

  return (
    <div className="dashboard">
      <h2>Your Dashboard</h2>
      <button onClick={loadPortfolio}>Load Portfolio</button>
      {message && <p className="message error">{message}</p>}

      {portfolio && (
        <div>
          <p>Total Balance: {portfolio.totalBalance} USDC</p>
          <h3>Your Vaults</h3>
          <ul>
            {portfolio.vaults.map((v, idx) => (
              <li key={idx}>
                {v.name}: {v.amount} (APY {v.apy * 100}%) - Earned {v.earnings}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
