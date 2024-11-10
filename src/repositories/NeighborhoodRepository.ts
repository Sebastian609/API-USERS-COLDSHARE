import { Database } from "../Database";
import { NeighborhoodDTO } from "../models/NeighborhoodDTO";
import { getAllNeighborhoodsQuery, findNeighborhoodQuery, createNeighborhoodQuery, updateNeighborhoodQuery, deleteNeighborhoodQuery } from "../queries/NeighborhoodQueries";

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

    async create(neighborhood: NeighborhoodDTO): Promise<void> {
        try {
            // Llama a executeInsert en lugar de execute o query
            await Database.executeInsert(createNeighborhoodQuery, [
                neighborhood.nombre,
                neighborhood.direccion,
                neighborhood.estado,
                neighborhood.fechaCreacion,
            ]);
        } catch (error) {
            throw new Error(`Error al crear vecindario: ${error.message}`);
        }
    }

    async update(neighborhood: NeighborhoodDTO): Promise<void> {
        try {
            console.log("Datos recibidos para actualización:", neighborhood); // Verifica los datos que llegan

            await Database.executeInsert(updateNeighborhoodQuery, [
                neighborhood.nombre,
                neighborhood.direccion,
                neighborhood.estado,
                neighborhood.vecindarioId,
            ]);
        } catch (error) {
            throw new Error(`Error al actualizar vecindario: ${error.message}`);
        }
    }

    async delete(id: number): Promise<void> {
        try {
            await Database.executeDelete(deleteNeighborhoodQuery, [id]);
        } catch (error) {
            throw new Error(`Error al eliminar el vecindario: ${error.message}`);
        }
    }
    
}

