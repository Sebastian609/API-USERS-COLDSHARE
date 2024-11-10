import { AlertLogDTO } from "../models/AlertLogDTO";
import { AlertLogRepository } from "../repositories/AlertLogRepository";

class LogAlertService {
    private alertLogRepository: AlertLogRepository;

    constructor() {
        this.alertLogRepository = new AlertLogRepository();
    }

    // Método para crear una nueva alerta
    async create(alertLog: AlertLogDTO): Promise<void> {
        try {
            await this.alertLogRepository.create(alertLog);
        } catch (error) {
            console.error("Error al crear la alerta:", error);
            throw error;
        }
    }

    // Método para obtener todas las alertas
    async getAll(): Promise<AlertLogDTO[]> {
        try {
            return await this.alertLogRepository.getAll();
        } catch (error) {
            console.error("Error al obtener todas las alertas:", error);
            throw error;
        }
    }

    // Método para buscar una alerta por ID
    async find(id: number): Promise<AlertLogDTO | null> {
        try {
            return await this.alertLogRepository.find(id);
        } catch (error) {
            console.error(`Error al buscar la alerta con ID ${id}:`, error);
            throw error;
        }
    }
}

export default LogAlertService;
