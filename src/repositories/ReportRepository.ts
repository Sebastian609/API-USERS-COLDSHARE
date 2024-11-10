import { Database } from "../Database";
import { ReportDTO } from "../models/ReportDTO";
import { createReportQuery, updateReportQuery, getAllReportsQuery, findReportQuery, findReportQuerybyVecindario } from "../queries/ReportQueries";

export class ReportRepository {
  // Obtener todos los reportes
  async getAll(): Promise<ReportDTO[]> {
    try {
      const [result] = await Database.select(getAllReportsQuery);

      if (!result || result.length === 0) {
        throw new Error("No se pudieron obtener los reportes");
      }

      return result as ReportDTO[];
    } catch (error) {
      throw error;
    }
  }

  // Obtener un reporte por su ID
  async find(id: number): Promise<ReportDTO> {
    try {
      const [result] = await Database.select(findReportQuery, [id]);

      if (!result || result.length === 0) {
        throw new Error("No se pudo obtener el reporte");
      }

      return result[0] as ReportDTO;
    } catch (error) {
      throw error;
    }
  }
  //
  async findByVecindario(vecindarioId: number): Promise<ReportDTO[]> {
    try {
        const [result] = await Database.select(findReportQuerybyVecindario, [vecindarioId]);

        // Verificamos si el resultado está vacío
        if (!result || result.length === 0) {
            throw new Error("No se encontraron reportes para este vecindario");
        }

        // Retornamos el array de reportes
        return result as ReportDTO[];
    } catch (error) {
        throw error; // Lanzamos el error para que se maneje en el servicio o controlador
    }
}
    // Insertar un nuevo reporte
  async create(report: ReportDTO): Promise<any> {
    try {
      const values = [
        report.usuarioId, 
        report.titulo, 
        report.cuerpo, 
        report.latitud, 
        report.longitud, 
        report.estado, 
        report.fechaCreacion
      ];

      const result = await Database.executeInsert(createReportQuery, values);
      return result;
    } catch (error) {
      throw error;
    }
  }

  // Actualizar un reporte existente
  async update(report: ReportDTO): Promise<any> {
    try {
      const values = [
        report.usuarioId, 
        report.titulo, 
        report.cuerpo, 
        report.latitud, 
        report.longitud, 
        report.estado,
        report.reporteId
      ];

      const result = await Database.executeInsert(updateReportQuery, values);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
