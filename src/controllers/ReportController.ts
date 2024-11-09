import { Request, Response } from "express";
import ReportService from "../service/ReportService";
import { ReportDTO } from "../models/ReportDTO";

export class ReportController {
    private reportService: ReportService;

    constructor() {
        this.reportService = new ReportService();
    }

    async onGetAll(req: Request, res: Response): Promise<Response> {
        try {
            const response = await this.reportService.getAll();
            return res.json(response);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    async onFind(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const response = await this.reportService.find(id);
            return res.json(response);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }
}
