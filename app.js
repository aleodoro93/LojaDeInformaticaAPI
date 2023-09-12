import express from 'express';

const app = express();
const port = process.env.PORT | 1109

app.listen(port, () => {
  console.log(`Server is running on port ${port} 🚀✈️`)
});