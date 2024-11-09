import { Database } from "../Database";
import { CommentDTO } from "../models/CommentDTO";
import { getAllCommentsQuery, findCommentQuery } from "../queries/CommentQueries";

export class CommentRepository {
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
}
