const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Mock vault data
  const vaults = [
    { id: 'vault1', name: 'USDC Stable Vault', apy: 0.12 },
    { id: 'vault2', name: 'XLM Growth Vault', apy: 0.18 }
  ];
  res.json(vaults);
});

module.exports = router;
