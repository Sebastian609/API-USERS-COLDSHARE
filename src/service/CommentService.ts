// services/CommentService.ts
import { CommentDTO } from "../models/CommentDTO";
import { CommentRepository } from "../repositories/CommentRepository";

class CommentService {
    private commentRepository: CommentRepository;

    constructor() {
        this.commentRepository = new CommentRepository();
    }

    // Obtener todos los comentarios
    async getAll(): Promise<CommentDTO[]> {
        try {
            const comments = await this.commentRepository.getAll();
            return comments;
        } catch (error) {
            throw error;
        }
    }

    // Obtener un comentario por su ID
    async find(id: number): Promise<CommentDTO> {
        try {
            const comment = await this.commentRepository.find(id);
            return comment;
        } catch (error) {
            throw error;
        }
    }

    // Obtener los comentarios por reporte_id
    async findByReporteId(reporte_id: number): Promise<CommentDTO[]> {
        try {
            const comments = await this.commentRepository.findByReporteId(reporte_id); // Llamar al repositorio para obtener los comentarios
            return comments || []; // Devolver un array vacío si no hay comentarios
        } catch (error) {
            throw new Error("Error al obtener los comentarios");
        }
    }

    // Crear un nuevo comentario
    async create(comment: CommentDTO): Promise<any> {
        try {
            const result = await this.commentRepository.create(comment);
            return result;
        } catch (error) {
            throw error;
        }
    }

    // Actualizar un comentario existente
    async update(comment: CommentDTO): Promise<any> {
        try {
            const result = await this.commentRepository.update(comment);
            return result;
        } catch (error) {
            throw error;
        }
    }
    
}

export default CommentService;
