import { Request, Response } from "express";
import LogAlertService from "../service/LogAlertService";
import { AlertLogDTO } from "../models/AlertLogDTO";

export class LogAlertController {
/*
    private logAlertService: LogAlertService;

    constructor() {
        this.logAlertService = new LogAlertService();
    }

    async onGetAll(req: Request, res: Response): Promise<Response> {
        try {
            const response = await this.logAlertService.getAll();
            return res.json(response);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    async onFind(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const response = await this.logAlertService.find(id);
            return res.json(response);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }
        */
}
