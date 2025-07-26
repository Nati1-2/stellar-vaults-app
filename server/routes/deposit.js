import express from "express";

const router = express.Router();

// This is just a placeholder route (no blockchain yet)
router.post("/", (req, res) => {
  const { address, amount, asset } = req.body;
  if (!address || !amount) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  res.json({ message: `Deposited ${amount} ${asset || "XLM"} to ${address}` });
});

export default router;
