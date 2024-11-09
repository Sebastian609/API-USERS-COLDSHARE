// LogAlertService.ts
import { AlertLogDTO } from "../models/AlertLogDTO";  // Cambié de LogAlert a LogAlertDTO
import { AlertLogRepository } from "../repositories/AlertLogRepository";

class LogAlertService {
    private logAlertRepository: AlertLogRepository;

    constructor() {
        this.logAlertRepository = new AlertLogRepository();
    }

    async getAll(): Promise<AlertLogDTO[]> {
        try {
            const logAlerts = await this.logAlertRepository.getAll();
            return logAlerts;
        } catch (error) {
            throw error;
        }
    }

    async find(id: number): Promise<AlertLogDTO> {
        try {
            const logAlert = await this.logAlertRepository.find(id);
            return logAlert;
        } catch (error) {
            throw error;
        }
    }
}

export default LogAlertService;

