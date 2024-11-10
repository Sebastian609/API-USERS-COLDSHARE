// services/ReportService.ts
import { CommentDTO } from "../models/CommentDTO";
import { ReportDTO } from "../models/ReportDTO";
import { UserDTO } from "../models/UserDTO";
import { CommentRepository } from "../repositories/CommentRepository";
import { ReportRepository } from "../repositories/ReportRepository";
import { UserRepository } from "../repositories/UserRepository";

class ReportService {
    private reportRepository: ReportRepository;
    private userRepository: UserRepository;
    private commentarioRepository : CommentRepository;

    constructor() {
        this.reportRepository = new ReportRepository(); // Inicialización del repositorio de reportes
        this.userRepository = new UserRepository();
        this.commentarioRepository = new CommentRepository()
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
            const userReports = reports.map(async (report:ReportDTO)=>{
                const usuario:UserDTO  = await this.userRepository.find(report.usuarioId)
                const comments: CommentDTO[] = await this.commentarioRepository.findByReporteId(report.usuarioId)
                
                const commentsUser = comments.map( async (comment: CommentDTO)=>{
                    const userComment = await  this.userRepository.find(comment.usuarioId)
                    const newComment = comment
                    newComment.nombreUsuario = userComment.nombre
                    return newComment
                })

                
                const com = await Promise.all(commentsUser)
                report.comments = com
                report.usuario = usuario

                return report
            })
            const data =  Promise.all(userReports);
            
            return data
        } catch (error) {
            throw error;
        }
    }
}

export default ReportService;
