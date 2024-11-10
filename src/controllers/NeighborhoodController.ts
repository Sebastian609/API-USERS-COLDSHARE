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

    async onCreate(req: Request, res: Response): Promise<Response> {
        try {
            const neighborhood: NeighborhoodDTO = req.body;
            await this.neighborhoodService.create(neighborhood);
            return res.status(201).json({ message: "Vecindario creado exitosamente" });
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    async onUpdate(req: Request, res: Response): Promise<Response> {
        try {
            console.log("Datos recibidos para actualizar:", req.body); // Log para verificar los datos

            if (!req.body.nombre || !req.body.direccion || !req.body.estado || !req.body.vecindarioId) {
                return res.status(400).json({ message: "Faltan datos necesarios para la actualización" });
            }

            const updatedNeighborhood = await this.neighborhoodService.update(req.body);
            return res.status(200).json(updatedNeighborhood);
        } catch (error) {
            return res.status(500).json({ message: "Error al actualizar el vecindario", error });
        }
    }

    async onDelete(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ message: "ID inválido" });
            }

            await this.neighborhoodService.delete(id);
            return res.status(200).json({ message: "Vecindario eliminado exitosamente" });
        } catch (error) {
            console.error("Error al eliminar vecindario:", error);
            return res.status(500).json({ message: "Error al eliminar el vecindario", error });
        }
    }



}
