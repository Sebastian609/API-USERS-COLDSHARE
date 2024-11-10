import { Router } from "express";
import { NeighborhoodController } from "../controllers/NeighborhoodController";

export class NeighborhoodRoutes {
    public router: Router;
    private neighborhoodController: NeighborhoodController;

    constructor() {
        this.router = Router();
        this.neighborhoodController = new NeighborhoodController();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get("/list", (req, res) => this.neighborhoodController.onGetAll(req, res));

        this.router.get("/search/:id", (req, res) => this.neighborhoodController.onFind(req, res));

        this.router.post("/create", (req, res) => this.neighborhoodController.onCreate(req, res));

        this.router.put("/update", (req, res) => this.neighborhoodController.onUpdate(req, res));

        this.router.delete("/delete/:id", (req, res) => this.neighborhoodController.onDelete(req, res));
    }
}

export default new NeighborhoodRoutes().router;
