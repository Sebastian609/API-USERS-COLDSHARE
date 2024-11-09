import { Request, Response } from "express";

import UserService from "../service/UserService";

import { logingDto } from "../models/loginDto";
import { User } from "../models/UserDTO";

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async onAuth(req: Request, res: Response): Promise<Response> {
    try {
      const loginData = req.body as logingDto;

      if (!loginData) {
        return res
          .status(400)
          .json({ message: "Los datos recibidos son nulos" });
      }
      const response = await this.userService.auth(
        loginData.username,
        loginData.password
      );
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

  async onSave(req: Request, res: Response): Promise<Response> {
    try {
      const user: User = req.body as User;

      if (!user) {
        return res
          .status(400)
          .json({ message: "Los datos recibidos son nulos" });
      }
      const response = await this.userService.save(user);
      return res.json(response);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }

  async onUpdate(req: Request, res: Response): Promise<Response> {
    try {
      const user: User = req.body as User;

      if (!user) {
        return res
          .status(400)
          .json({ message: "Los datos recibidos son nulos" });
      }
      const response = await this.userService.update(user);
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
}
