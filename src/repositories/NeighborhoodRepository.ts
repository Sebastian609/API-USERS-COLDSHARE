import { Database } from "../Database";
import { NeighborhoodDTO } from "../models/NeighborhoodDTO";
import { getAllNeighborhoodsQuery, findNeighborhoodQuery } from "../queries/NeighborhoodQueries";

export class NeighborhoodRepository {
    async getAll(): Promise<NeighborhoodDTO[]> {
        try {
            const [result] = await Database.select(getAllNeighborhoodsQuery);

            if (!result) {
                throw new Error("No se pudieron obtener los vecindarios");
            }

            return result as NeighborhoodDTO[];
        } catch (error) {
            throw error;
        }
    }

    async find(id: number): Promise<NeighborhoodDTO> {
        try {
            const [result] = await Database.select(findNeighborhoodQuery, [id]);

            if (!result || result.length === 0) {
                throw new Error("No se pudo obtener el vecindario");
            }

            return result[0] as NeighborhoodDTO;
        } catch (error) {
            throw error;
        }
    }
}

