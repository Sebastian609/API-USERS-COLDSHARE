import { Database } from "../Database";
import { NeighborhoodDTO } from "../models/NeighborhoodDTO";

import { getAllNeighborhoodsQuery, findNeighborhoodQuery, createNeighborhoodQuery, updateNeighborhoodQuery } from "../queries/neighborhoodQueries";

export class NeighborhoodRepository {

    async getAll(): Promise<NeighborhoodDTO[]> {
        try {
            const [result] = await Database.select(getAllNeighborhoodsQuery);

            if (!result) {
                throw new Error("No se pudo obtener los vecindarios.");
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
                throw new Error("No se encontró el vecindario.");
            }

            return result[0] as NeighborhoodDTO;
        } catch (error) {
            throw error;
        }
    }

    async save(neighborhood: NeighborhoodDTO): Promise<boolean> {
        try {
            const values = [
                neighborhood.nombre,
                neighborhood.direccion,
                neighborhood.estado,
                neighborhood.fechaCreacion,
            ];

            const result = await Database.executeInsert(createNeighborhoodQuery, values);

            if (!result) {
                throw new Error("No se pudo guardar el vecindario.");
            }
            return true;
        } catch (error) {
            throw error;
        }
    }

    async update(neighborhood: NeighborhoodDTO): Promise<boolean> {
        try {
            const values = [
                neighborhood.nombre,
                neighborhood.direccion,
                neighborhood.estado,
                neighborhood.fechaCreacion,
                neighborhood.vecindarioId
            ];

            const result = await Database.executeInsert(updateNeighborhoodQuery, values);

            if (!result) {
                throw new Error("No se pudo actualizar el vecindario.");
            }
            return true;
        } catch (error) {
            throw error;
        }
    }
}
