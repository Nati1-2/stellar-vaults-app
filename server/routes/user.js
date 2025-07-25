const express = require('express');
const router = express.Router();

router.get('/:address', (req, res) => {
  const { address } = req.params;

  // Mock user portfolio data
  const portfolio = {
    totalBalance: 500,
    vaults: [
      { name: 'USDC Stable Vault', amount: 300, apy: 0.12, earnings: 5.5 },
      { name: 'XLM Growth Vault', amount: 200, apy: 0.18, earnings: 7.2 }
    ],
    earningsHistory: [
      { date: 'Day 1', earnings: 1 },
      { date: 'Day 2', earnings: 2 },
      { date: 'Day 3', earnings: 3 },
      { date: 'Day 4', earnings: 4 },
      { date: 'Day 5', earnings: 5 }
    ]
  };

  res.json(portfolio);
});

module.exports = router;
