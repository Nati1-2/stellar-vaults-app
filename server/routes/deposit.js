const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { vaultId, amount, asset, userAddress } = req.body;

  if (!vaultId || !amount || !asset || !userAddress) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Simulate a deposit success response
  res.json({
    success: true,
    tx: {
      txHash: 'mock-txhash-1234567890',
      vaultId,
      amount,
      asset,
      userAddress
    }
  });
});

module.exports = router;
