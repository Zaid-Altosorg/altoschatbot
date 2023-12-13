// src/index.ts
import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 8000;
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
