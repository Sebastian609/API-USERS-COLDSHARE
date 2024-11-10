import { Database } from "../Database";
import { UserDTO } from "../models/UserDTO";
import { getAllUsersQuery, findUserQuery, auth, deleteUserQuery, updateUserQuery, createUserQuery } from "../queries/UserQueries";
import { LoginDto } from "../models/LoginDto";

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

  async create(user: UserDTO): Promise<void> {
    try {
      await Database.executeInsert(createUserQuery, [
        user.vecindarioId,
        user.rolId,
        user.nombre,
        user.dni,
        "000000" 
      ]);
    } catch (error) {
      throw new Error(`Error al crear usuario: ${error.message}`);
    }
  }

  async updateStatus(id: number, estado: number): Promise<void> {
    try {
      await Database.executeInsert(updateUserQuery, [estado, id]);
    } catch (error) {
      throw new Error(`Error al actualizar el estado del usuario: ${error.message}`);
    }
  }  

  async delete (id: number): Promise<void> {
    try {
      await Database.executeDelete(deleteUserQuery, [id]);
    } catch (error) {
      throw new Error(`Error al eliminar el usuario: ${error.message}`);
    }
  }

  async findByPasswordAndDNI(login: LoginDto): Promise<UserDTO> {
    try {
      const values = [login.username, login.password]
      const [result] = await Database.select(auth, [values]);

      if (!result || result.length === 0) {
        throw new Error("No se pudo obtener el usuario");
      }

      return result[0] as UserDTO;
    } catch (error) {
      throw error;
    }
  }
}

