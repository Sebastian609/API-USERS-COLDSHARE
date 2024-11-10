import express from 'express';
import cors from 'cors';
import { streakRoutes } from './routes/Streak.routes';
import NeighborhoodRoutes from "./routes/NeighborhoodRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", streakRoutes);

app.use("/api/neighborhoods", NeighborhoodRoutes);

app.listen(3023, () => {
  console.log("Server running on port 3023");
});
