import { Database } from "../Database";
import { ReportDTO } from "../models/ReportDTO";
import { getAllReportsQuery, findReportQuery } from "../queries/ReportQueries";

export class ReportRepository {
    async getAll(): Promise<ReportDTO[]> {
        try {
            const [result] = await Database.select(getAllReportsQuery);

            if (!result) {
                throw new Error("No se pudieron obtener los reportes");
            }

            return result as ReportDTO[];
        } catch (error) {
            throw error;
        }
    }

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
}
