const axios = require('axios');

const PALTA_BASE_URL = 'https://api.paltalabs.xyz'; // Replace with real URL
const API_KEY = process.env.PALTA_API_KEY;

// Fetch available vaults
async function getVaults() {
  const res = await axios.get(`${PALTA_BASE_URL}/vaults`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  return res.data;
}

// Deposit into a vault
async function depositToVault(vaultId, amount, asset, userAddress) {
  const res = await axios.post(
    `${PALTA_BASE_URL}/vaults/${vaultId}/deposit`,
    { amount, asset, user: userAddress },
    { headers: { Authorization: `Bearer ${API_KEY}` } }
  );
  return res.data;
}

// Get user balance and deposits
async function getUserBalance(address) {
  const res = await axios.get(`${PALTA_BASE_URL}/users/${address}/portfolio`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  return res.data;
}

module.exports = {
  getVaults,
  depositToVault,
  getUserBalance,
};
