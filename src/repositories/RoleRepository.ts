import { Database } from "../Database";
import { RoleDTO } from "../models/RoleDTO";
import { getAllRolesQuery, findRoleQuery } from "../queries/RoleQueries";

export class RoleRepository {
    async getAll(): Promise<RoleDTO[]> {
        try {
            const [result] = await Database.select(getAllRolesQuery);

            if (!result) {
                throw new Error("No se pudieron obtener los roles");
            }

            return result as RoleDTO[];
        } catch (error) {
            throw error;
        }
    }

    async find(id: number): Promise<RoleDTO[]> {
        try {
            const [result] = await Database.select(findRoleQuery, [id]);

            if (!result || result.length === 0) {
                throw new Error("No se pudo obtener el rol");
            }

            return result as RoleDTO[];
        } catch (error) {
            throw error;
        }
    }
}
