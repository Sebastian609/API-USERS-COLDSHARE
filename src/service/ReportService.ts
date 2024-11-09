// services/ReportService.ts
import { ReportDTO } from "../models/ReportDTO";
import { ReportRepository } from "../repositories/ReportRepository";

class ReportService {
    private reportRepository: ReportRepository;

    constructor() {
        this.reportRepository = new ReportRepository();
    }

    async getAll(): Promise<ReportDTO[]> {
        try {
            const reports = await this.reportRepository.getAll();
            return reports;
        } catch (error) {
            throw error;
        }
    }

    async find(id: number): Promise<ReportDTO> {
        try {
            const report = await this.reportRepository.find(id);
            return report;
        } catch (error) {
            throw error;
        }
    }
}

export default ReportService;
