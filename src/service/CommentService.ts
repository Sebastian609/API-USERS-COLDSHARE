// services/CommentService.ts
import { CommentDTO } from "../models/CommentDTO";
import { CommentRepository } from "../repositories/CommentRepository";

class CommentService {
    private commentRepository: CommentRepository;

    constructor() {
        this.commentRepository = new CommentRepository();
    }

    async getAll(): Promise<CommentDTO[]> {
        try {
            const comments = await this.commentRepository.getAll();
            return comments;
        } catch (error) {
            throw error;
        }
    }

    async find(id: number): Promise<CommentDTO> {
        try {
            const comment = await this.commentRepository.find(id);
            return comment;
        } catch (error) {
            throw error;
        }
    }
}

export default CommentService;
