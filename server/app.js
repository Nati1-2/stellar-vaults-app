import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import vaultsRoute from "./routes/vaults.js";
import depositRoute from "./routes/deposit.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/vaults", vaultsRoute);
app.use("/api/deposit", depositRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
