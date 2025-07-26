import express from "express";

const router = express.Router();

// Dummy vaults list (can connect to DB later)
const vaults = [
  { id: 1, name: "USDC Pool", apy: "5%", totalLocked: "10,000 USDC" },
  { id: 2, name: "XLM Staking", apy: "3%", totalLocked: "50,000 XLM" }
];

router.get("/", (req, res) => {
  res.json(vaults);
});

export default router;
