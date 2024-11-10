// routes/commentRoutes.ts
import { Router } from 'express';
import { CommentController } from '../controllers/CommentController';

const routercomments: Router = Router();
const commentController = new CommentController();

// Ruta para obtener todos los comentarios
routercomments.get('/', commentController.onGetAll.bind(commentController));

// Ruta para obtener un comentario por ID
routercomments.get('/:id', commentController.onFind.bind(commentController));

// Ruta para crear un nuevo comentario
routercomments.post('/', commentController.onCreate.bind(commentController));

// Ruta para actualizar un comentario
routercomments.put('/', commentController.onUpdate.bind(commentController));

// Ruta para obtener los comentarios por reporte
routercomments.get('/reporte/:reporte_id', commentController.findByReporteId.bind(commentController));

export default routercomments;
