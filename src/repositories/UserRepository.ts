
import { Database } from "../Database";
import { User } from "../models/User";

import { authUserQuery, createUserQuery, findUser, getAllUser, updateUser } from "../queries/userQueries";

export class UserRepository {
  async auth(username: string, password: string): Promise<User> {
    try {
      const values = [password,username]
      const [result] = await Database.select(authUserQuery,values);

      
      if (result.length===0)  {
        throw new Error("el usuario no existe");
      }

      const user = result[0] as User;
  
      return user;
    } catch (error) {
      throw error;
    }
  }

  async getAll(): Promise<User[]> {
    try {

      const [result] = await Database.select(getAllUser);

      
      if (!result)  {
        throw new Error("no se puedo objtener");
      }

      const user = result as User[];
  
      return user;
    } catch (error) {
      throw error;
    }
  }

  async find(id:number): Promise<User> {
    try {

      const [result] = await Database.select(findUser,[id]);

      
      if (!result || result.length===0)  {
        throw new Error("no se puedo objtener");
      }

      const user = result[0] as User;
  
      return user;
    } catch (error) {
      throw error;
    }
  }



  async save(user:User): Promise<boolean> {
    try {
      const values = [
        user.name,
        user.lastname,
        user.password,
        user.isAdmin,
        user.username
      ]
      
      const result = await Database.executeInsert(createUserQuery,values);
      
      if (!result) {
        throw new Error("No se pudo guardar el usuario");
      }
      return true;

    } catch (error) {
      throw error;
    }
  }

  async update(user:User): Promise<boolean> {
    try {
      const values = [
        user.name,
        user.lastname,
        user.password,
        user.isAdmin,
        user.isActive,
        user.username,
        user.id
      ]
      
      const result = await Database.executeInsert(updateUser,values);
      
      if (!result) {
        throw new Error("No se pudo guardar el usuario");
      }
      return true;

    } catch (error) {
      throw error;
    }
  }
}
