import { Database } from "../Database";
import { AlertLogDTO } from "../models/AlertLogDTO";
import { getAllLogAlertsQuery, findLogAlertQuery } from "../queries/AlertLogQueries";

export class AlertLogRepository {
    async getAll(): Promise<AlertLogDTO[]> {
        try {
            const [result] = await Database.select(getAllLogAlertsQuery);

            if (!result) {
                throw new Error("No se pudieron obtener las alertas");
            }

            return result as AlertLogDTO[];
        } catch (error) {
            throw error;
        }
    }

    async find(id: number): Promise<AlertLogDTO> {
        try {
            const [result] = await Database.select(findLogAlertQuery, [id]);

            if (!result || result.length === 0) {
                throw new Error("No se pudo obtener la alerta");
            }

            return result[0] as AlertLogDTO;
        } catch (error) {
            throw error;
        }
    }
}
