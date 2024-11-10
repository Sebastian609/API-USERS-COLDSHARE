// routes/reportRoutes.ts
import { Router } from 'express';
import { ReportController } from '../controllers/ReportController';

const routerreports: Router = Router();
const reportController = new ReportController();

// Ruta para obtener todos los reportes
routerreports.get('/', reportController.onGetAll.bind(reportController));

// Ruta para obtener un reporte por ID
routerreports.get('/:id', reportController.onFind.bind(reportController));

// Ruta para crear un nuevo reporte
routerreports.post('/', reportController.onCreate.bind(reportController));

// Ruta para actualizar un reporte
routerreports.put('/', reportController.onUpdate.bind(reportController));

export default routerreports;
