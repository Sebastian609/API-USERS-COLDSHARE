import express from 'express';
import cors from 'cors';
import { streakRoutes } from './routes/Streak.routes';
import NeighborhoodRoutes from "./routes/NeighborhoodRoutes";
import router from './routes/user.routes';
import routerreports from './routes/Reports.routes';
import routercomments from './routes/Comentarios.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", router);
app.use("/api/streak",streakRoutes);
app.use("/api/reports",routerreports);
app.use("/api/comentarios",routercomments)
app.use("/api/neighborhoods", NeighborhoodRoutes);
app.listen(3023, () => {
  console.log("Server running on port 3023");
});
