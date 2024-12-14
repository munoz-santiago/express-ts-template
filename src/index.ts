import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;
if (!PORT) throw new Error('PORT is not set');

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Express + TypeScript API!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
