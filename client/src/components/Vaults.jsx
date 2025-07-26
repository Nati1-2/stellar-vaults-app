import React, { useEffect, useState } from "react";

export default function Vaults({ walletAddress }) {
  const [vaults, setVaults] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/vaults")
      .then((res) => res.json())
      .then(setVaults)
      .catch(() => setError("Failed to load vaults."));
  }, []);

  return (
    <div>
      <h2>Vaults</h2>
      {error && <p className="error">{error}</p>}
      {vaults.map((vault) => (
        <div key={vault.id}>
          <h3>{vault.name}</h3>
          <p>APY: {vault.apy}</p>
          <p>Total Locked: {vault.totalLocked}</p>
        </div>
      ))}
      {!walletAddress && <p>Connect a wallet to interact with vaults.</p>}
    </div>
  );
}
