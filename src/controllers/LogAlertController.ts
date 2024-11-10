import { Request, Response } from "express";
import LogAlertService from "../service/LogAlertService";
import { AlertLogDTO } from "../models/AlertLogDTO";

class LogAlertController {
    private logAlertService: LogAlertService;

    constructor() {
        this.logAlertService = new LogAlertService();
    }

    // Método para crear una nueva alerta
    async create(req: Request, res: Response): Promise<void> {
        try {
            const { latitud, longitud } = req.body;

            if (latitud === undefined || longitud === undefined) {
                res.status(400).json({ message: "Latitud y longitud son requeridas." });
                return;
            }

            const alertLog: AlertLogDTO = {
                latitud,
                longitud,
                logAlertaId: 0,
                fechaCreacion: undefined
            };
            await this.logAlertService.create(alertLog);
            res.status(201).json({ message: "Alerta creada exitosamente." });
        } catch (error) {
            console.error("Error en crear alerta:", error);
            res.status(500).json({ message: "Error al crear la alerta." });
        }
    }

    // Método para obtener todas las alertas
    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const alerts = await this.logAlertService.getAll();
            res.status(200).json(alerts);
        } catch (error) {
            console.error("Error en obtener todas las alertas:", error);
            res.status(500).json({ message: "Error al obtener las alertas." });
        }
    }

    // Método para buscar una alerta por ID
    async find(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id, 10);
            if (isNaN(id)) {
                res.status(400).json({ message: "ID inválido." });
                return;
            }

            const alert = await this.logAlertService.find(id);
            if (alert) {
                res.status(200).json(alert);
            } else {
                res.status(404).json({ message: "Alerta no encontrada." });
            }
        } catch (error) {
            console.error(`Error en buscar alerta con ID ${req.params.id}:`, error);
            res.status(500).json({ message: "Error al buscar la alerta." });
        }
    }

    // Método para eliminar una alerta por ID
}

export default new LogAlertController();
