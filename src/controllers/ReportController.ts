// controllers/ReportController.ts
import { Request, Response } from "express";
import ReportService from "../service/ReportService";
import { ReportDTO } from "../models/ReportDTO";

export class ReportController {
    private reportService: ReportService;

    constructor() {
        this.reportService = new ReportService();
    }

    // Obtener todos los reportes
    async onGetAll(req: Request, res: Response): Promise<Response> {
        try {
            const reports = await this.reportService.getAll();  // Obtener todos los reportes desde el servicio
            return res.json(reports);  // Enviar los reportes como respuesta
        } catch (error: any) {
            return res.status(500).json({ message: error.message });  // En caso de error, enviar mensaje de error
        }
    }

    // Obtener un reporte por ID
    async onFind(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);  // Obtener el ID de los parámetros de la URL
            const report = await this.reportService.find(id);  // Buscar el reporte en el servicio
            return res.json(report);  // Enviar el reporte encontrado
        } catch (error: any) {
            return res.status(500).json({ message: error.message });  // En caso de error, enviar mensaje de error
        }
    }

    // Crear un nuevo reporte
    async onCreate(req: Request, res: Response): Promise<Response> {
        try {
            const report: ReportDTO = req.body;  // Obtener el cuerpo de la solicitud como un ReportDTO
            const result = await this.reportService.create(report);  // Crear el reporte a través del servicio
            return res.status(201).json(result);  // Enviar el resultado de la creación
        } catch (error: any) {
            return res.status(500).json({ message: error.message });  // En caso de error, enviar mensaje de error
        }
    }

    // Actualizar un reporte
    async onUpdate(req: Request, res: Response): Promise<Response> {
        try {
            const report: ReportDTO = req.body;  // Obtener el cuerpo de la solicitud como un ReportDTO
            const result = await this.reportService.update(report);  // Actualizar el reporte a través del servicio
            return res.status(200).json(result);  // Enviar el resultado de la actualización
        } catch (error: any) {
            return res.status(500).json({ message: error.message });  // En caso de error, enviar mensaje de error
        }
    }
}
