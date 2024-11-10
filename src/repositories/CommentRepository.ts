import { Database } from "../Database";
import { pool } from "../db";
import { CommentDTO } from "../models/CommentDTO";
import { 
    createCommentQuery, 
    updateCommentQuery, 
    getAllCommentsQuery, 
    findCommentQuery, 
    findCommentQueryByReporte 
} from "../queries/CommentQueries"; // Importa las consultas de comentarios

export class CommentRepository {

    // Obtener todos los comentarios
    async getAll(): Promise<CommentDTO[]> {
        try {
            const [result] = await Database.select(getAllCommentsQuery);

            if (!result) {
                throw new Error("No se pudieron obtener los comentarios");
            }

            return result as CommentDTO[];
        } catch (error) {
            throw error;
        }
    }

    // Obtener un comentario por su ID
    async find(id: number): Promise<CommentDTO> {
        try {
            const [result] = await Database.select(findCommentQuery, [id]);

            if (!result || result.length === 0) {
                throw new Error("No se pudo obtener el comentario");
            }

            return result[0] as CommentDTO;
        } catch (error) {
            throw error;
        }
    }

    // Obtener los comentarios por reporte_id
    async findByReporteId(reporte_id: number): Promise<CommentDTO[]> {
        try {
            const [result] = await Database.select(findCommentQueryByReporte, [reporte_id]);
            if(result.length === 0){
                return []
            }

            if (!result) {
                throw new Error("No se encontraron comentarios para este reporte");
            }

            return result as CommentDTO[];
        } catch (error) {
            throw error;
        }
    }

    // Crear un nuevo comentario
    async create(comment: CommentDTO): Promise<boolean> {
        try {
            const values = [comment.reporteId, comment.usuarioId, comment.cuerpo];
            console.log(values)
            const [result] = await pool.query(createCommentQuery, values);
            console.log("logrado")

            return true;
        } catch (error) {
            return false;
        }
    }

    // Actualizar un comentario existente
    async update(comment: CommentDTO): Promise<any> {
        try {
            const values = [comment.reporteId, comment.usuarioId, comment.cuerpo, comment.estado, comment.comentariosId];
            const [result] = await Database.executeInsert(updateCommentQuery, values);

            if (!result) {
                throw new Error("No se pudo actualizar el comentario");
            }

            return result;
        } catch (error) {
            throw error;
        }
     }
}
