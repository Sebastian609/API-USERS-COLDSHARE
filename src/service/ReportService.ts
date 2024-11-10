// services/ReportService.ts
import { ReportDTO } from "../models/ReportDTO";
import { ReportRepository } from "../repositories/ReportRepository";

class ReportService {
    private reportRepository: ReportRepository;

    constructor() {
        this.reportRepository = new ReportRepository(); // Inicialización del repositorio de reportes
    }

    // Método para obtener todos los reportes
    async getAll(): Promise<ReportDTO[]> {
        try {
            // Llamada al repositorio para obtener todos los reportes
            const reports = await this.reportRepository.getAll();
            return reports;  // Devolver los reportes obtenidos
        } catch (error) {
            console.error('Error al obtener los reportes:', error);  // Log para el error
            throw error;  // Lanzar el error para manejarlo en el controlador
        }
    }

    // Método para obtener un reporte por ID
    async find(id: number): Promise<ReportDTO> {
        try {
            // Llamada al repositorio para encontrar el reporte por ID
            const report = await this.reportRepository.find(id);
            return report;  // Devolver el reporte encontrado
        } catch (error) {
            console.error('Error al obtener el reporte:', error);  // Log para el error
            throw error;  // Lanzar el error para manejarlo en el controlador
        }
    }

    // Método para crear un reporte
    async create(report: ReportDTO): Promise<any> {
        try {
            // Llamada al repositorio para insertar el nuevo reporte
            const result = await this.reportRepository.create(report);
            return result;  // Devolver el resultado de la inserción
        } catch (error) {
            console.error('Error al crear el reporte:', error);  // Log para el error
            throw error;  // Lanzar el error para manejarlo en el controlador
        }
    }

    // Método para actualizar un reporte
    async update(report: ReportDTO): Promise<any> {
        try {
            // Llamada al repositorio para actualizar el reporte
            const result = await this.reportRepository.update(report);
            return result;  // Devolver el resultado de la actualización
        } catch (error) {
            console.error('Error al actualizar el reporte:', error);  // Log para el error
            throw error;  // Lanzar el error para manejarlo en el controlador
        }
    }
    async findByVecindario(vecindarioId: number): Promise<ReportDTO[]> {
        try {
            const reports = await this.reportRepository.findByVecindario(vecindarioId);
            return reports;
        } catch (error) {
            throw error;
        }
    }
}

export default ReportService;
