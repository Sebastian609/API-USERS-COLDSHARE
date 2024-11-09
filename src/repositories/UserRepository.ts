import { Database } from "../Database";
import { UserDTO } from "../models/UserDTO";
import { getAllUsersQuery, findUserQuery } from "../queries/UserQueries";

export class UserRepository {
  async getAll(): Promise<UserDTO[]> {
    try {
      const [result] = await Database.select(getAllUsersQuery);

      if (!result) {
        throw new Error("No se pudieron obtener los usuarios");
      }

      return result as UserDTO[];
    } catch (error) {
      throw error;
    }
  }

  async find(id: number): Promise<UserDTO> {
    try {
      const [result] = await Database.select(findUserQuery, [id]);

      if (!result || result.length === 0) {
        throw new Error("No se pudo obtener el usuario");
      }

      return result[0] as UserDTO;
    } catch (error) {
      throw error;
    }
  }
}

