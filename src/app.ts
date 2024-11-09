import express from 'express';
import cors from 'cors';
import { streakRoutes } from './routes/Streak.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", streakRoutes);

app.listen(3023, () => {
  console.log("Server running on port 3023");
});
