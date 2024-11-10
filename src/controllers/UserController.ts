import { Request, Response } from "express";
import UserService from "../service/UserService";
import { LoginDto } from "../models/LoginDto";
import { UserDTO } from "../models/UserDTO";


export class UserController {
  //******ss */
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async onAuth(req: Request, res: Response): Promise<Response> {
    try {
      const loginData = req.body as LoginDto;
      if (!loginData) {
        return res
          .status(400)
          .json({ message: "Los datos recibidos son nulos" });
      }
      const response = await this.userService.auth(loginData);
      return res.json(response);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }

  async onGetAll(req: Request, res: Response): Promise<Response> {
    try {
      const response = await this.userService.getAll();
      return res.json(response);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }

  async onFind(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const response = await this.userService.find(id);
      return res.json(response);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }

  async onCreate(req: Request, res: Response): Promise<Response> {
    try {
      const user: UserDTO = req.body;
      await this.userService.create(user);
      return res.status(201).json({ message: "Usuario creado exitosamente" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async onUpdate(req: Request, res: Response): Promise<Response> {
    try {
      const { id, estado } = req.body;
      if (typeof id !== 'number' || typeof estado !== 'number') {
        return res.status(400).json({ message: "ID o estado inválido" });
      }
      await this.userService.updateStatus(id, estado);
      return res.status(200).json({ message: "Estado actualizado exitosamente" });
    } catch (error) {
      return res.status(500).json({ message: "Error al actualizar el estado", error });
    }
  }  

  async onDelete(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "ID inválido" });
      }

      await this.userService.delete(id);
      return res.status(200).json( {message: "Usuario eliminado exitosamente"})
    } catch (error) {
      console.error("Error al eliminar vecindario:", error);
      return res.status(500).json({ message: "Error al eliminar el vecindario", error });
    }
  }
}
