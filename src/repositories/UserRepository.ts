import { Database } from "../Database";
import { UserDTO } from "../models/UserDTO";
import {getAllUsersQuery, findUserQuery, auth} from "../queries/UserQueries";
import {LoginDto} from "../models/LoginDto";
import { log } from "node:console";
import { pool } from "../db";

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

  async findByPasswordAndDNI(login: LoginDto): Promise<UserDTO> {
    try {
      // Prepare the values for LIKE clause
      const values = [`%${login.password}%`, `%${login.username}%`];
      console.log("Query values:", values);
  
      // Execute the query
      const [result] = await pool.query(auth, values);

      
      if (!(result as any[])[0]) {
        throw new Error("No se pudo obtener el usuario");
      }
     

      return (result as any[])[0] as UserDTO;

    } catch (error) {
      console.error("Error during findByPasswordAndDNI:", error);
      throw error;
    }
  }
  
}

