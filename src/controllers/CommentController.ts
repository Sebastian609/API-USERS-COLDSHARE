// controllers/CommentController.ts
import { Request, Response } from "express";
import CommentService from "../service/CommentService";
import { CommentDTO } from "../models/CommentDTO";
import { log } from "console";

export class CommentController {
    private commentService: CommentService;

    constructor() {
        this.commentService = new CommentService();
    }

    // Obtener todos los comentarios
    async onGetAll(req: Request, res: Response): Promise<Response> {
        try {
            const response = await this.commentService.getAll();
            return res.json(response); // Devuelve los comentarios en formato JSON
        } catch (error: any) {
            return res.status(500).json({ message: error.message }); // Error de servidor
        }
    }

    // Obtener un comentario por ID
    async onFind(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id); // Obtener el ID de la URL
            if (isNaN(id)) {
                return res.status(400).json({ message: "ID inválido" }); // Validación del ID
            }
            const response = await this.commentService.find(id); // Buscar el comentario por ID
            return res.json(response); // Devolver el comentario en formato JSON
        } catch (error: any) {
            return res.status(500).json({ message: error.message }); // Error de servidor
        }
    }

    // Obtener los comentarios por reporte_id
    async findByReporteId(req: Request, res: Response): Promise<Response> {
        try {
            const reporte_id = parseInt(req.params.reporte_id); // Obtener reporte_id de la URL
            console.log(reporte_id);
            
            
            const response = await this.commentService.findByReporteId(reporte_id); // Buscar los comentarios por reporte_id
            return res.json(response); // Devolver los comentarios en formato JSON
        } catch (error: any) {
            return res.status(500).json({ message: error.message }); // Error de servidor
        }
    }

    // Crear un nuevo comentario
    async onCreate(req: Request, res: Response): Promise<Response> {
        try {
            const comment: CommentDTO = req.body as CommentDTO; 
            console.log(comment)
            // Obtener el comentario desde el cuerpo de la solicitud
            if (!comment.reporteId || !comment.usuarioId || !comment.cuerpo) {
                return res.status(400).json({ message: "Faltan datos obligatorios" }); // Validación de campos
            }
            const result = await this.commentService.create(comment); // Crear el comentario
            return res.status(201).json(result); // Devolver el comentario creado con código 201
        } catch (error: any) {
            return res.status(500).json({ message: error.message }); // Error de servidor
        }
    }

    // Actualizar un comentario existente
    async onUpdate(req: Request, res: Response): Promise<Response> {
        try {
            const comment: CommentDTO = req.body; // Obtener el comentario desde el cuerpo de la solicitud
            if (!comment.comentariosId) {
                return res.status(400).json({ message: "ID del comentario es necesario" }); // Validación del ID
            }
            const result = await this.commentService.update(comment); // Actualizar el comentario
            return res.status(200).json(result); // Devolver el comentario actualizado
        } catch (error: any) {
            return res.status(500).json({ message: error.message }); // Error de servidor
        }
    }
}
