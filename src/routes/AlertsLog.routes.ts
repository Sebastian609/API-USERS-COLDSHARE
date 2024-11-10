import { Router } from 'express';
import LogAlertController from '../controllers/LogAlertController';

const alertrouter = Router();

// Ruta para crear una nueva alerta
alertrouter.post('/register', (req, res) => LogAlertController.create(req, res));

// Ruta para obtener todas las alertas
alertrouter.get('/log-alerts', (req, res) => LogAlertController.getAll(req, res));

// Ruta para obtener una alerta por ID
alertrouter.get('/log-alerts/:id', (req, res) => LogAlertController.find(req, res));

export default alertrouter;
