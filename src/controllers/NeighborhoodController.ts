import { Request, Response } from "express";
import NeighborhoodService from "../service/NeighborhoodService";
import { NeighborhoodDTO } from "../models/NeighborhoodDTO";

export class NeighborhoodController {
    private neighborhoodService: NeighborhoodService;

    constructor() {
        this.neighborhoodService = new NeighborhoodService();
    }

    async onGetAll(req: Request, res: Response): Promise<Response> {
        try {
            const response = await this.neighborhoodService.getAll();
            return res.json(response);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    async onFind(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const response = await this.neighborhoodService.find(id);
            return res.json(response);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }
}
