import { AlertLogDTO } from "../models/AlertLogDTO";
import { Database } from "../Database"; // Tu clase Database
import {
  createLogAlertQuery,
  getAllLogAlertsQuery,
  findLogAlertQuery
} from "../queries/AlertLogQueries";

export class AlertLogRepository {
  // Método para insertar una alerta en la base de datos
  async create(alertLog: AlertLogDTO): Promise<void> {
    const { latitud, longitud } = alertLog;
    try {
      await Database.executeInsert(createLogAlertQuery, [latitud, longitud]);
    } catch (error) {
      console.error("Error al insertar la alerta:", error);
      throw error;
    }
  }

  // Método para obtener todas las alertas
  async getAll(): Promise<AlertLogDTO[]> {
    try {
      const result = await Database.executeSelect(getAllLogAlertsQuery);
      return result as AlertLogDTO[];
    } catch (error) {
      console.error("Error al obtener todas las alertas:", error);
      throw error;
    }
  }

  // Método para buscar una alerta por ID
  async find(id: number): Promise<AlertLogDTO | null> {
    try {
      const result = await Database.executeSelect(findLogAlertQuery, [id]);
      return result.length > 0 ? (result[0] as AlertLogDTO) : null;
    } catch (error) {
      console.error(`Error al buscar la alerta con ID ${id}:`, error);
      throw error;
    }
  }
}
