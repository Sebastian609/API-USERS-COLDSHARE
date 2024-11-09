import { Request, Response } from "express";
import CommentService from "../service/CommentService";
import { CommentDTO } from "../models/CommentDTO";

export class CommentController {
    private commentService: CommentService;

    constructor() {
        this.commentService = new CommentService();
    }

    async onGetAll(req: Request, res: Response): Promise<Response> {
        try {
            const response = await this.commentService.getAll();
            return res.json(response);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    async onFind(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const response = await this.commentService.find(id);
            return res.json(response);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }
}
