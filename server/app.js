const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const vaultsRouter = require('./routes/vaults');
const depositRouter = require('./routes/deposit');
const userRouter = require('./routes/user');

app.use('/api/vaults', vaultsRouter);
app.use('/api/deposit', depositRouter);
app.use('/api/user', userRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
