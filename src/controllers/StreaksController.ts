import { Request, Response } from 'express';
import { StreaksService } from '../service/StreaksService';
import { StreaksDTO } from '../models/StreaksDTO';

export class StreaksController {
  private streaksService: StreaksService;

  constructor() {
    this.streaksService = new StreaksService();
  }

  // Método para actualizar la racha de un usuario
  async updateStreak(req: Request, res: Response): Promise<Response> {
    const userId = req.body.userId as number;

    try {
      const updatedStreak: boolean = await this.streaksService.updateStreak(userId);
      return res.status(200).json({
        success: true,
        message: 'Racha actualizada correctamente',
        data: updatedStreak
      });
    } catch (error) {
      console.error('Error al actualizar la racha:', error);
      return res.status(500).json({
        success: false,
        message: 'Error al actualizar la racha',
        error: error.message
      });
    }
  }

  // Método para obtener la racha de un usuario
  async getStreak(req: Request, res: Response): Promise<Response> {
    const userId = parseInt(req.params.userId);

    try {
      const streak: StreaksDTO = await this.streaksService.getStreak(userId);
      return res.status(200).json({
        success: true,
        message: 'Racha obtenida correctamente',
        data: streak
      });
    } catch (error) {
      console.error('Error al obtener la racha:', error);
      return res.status(500).json({
        success: false,
        message: 'Error al obtener la racha',
        error: error.message
      });
    }
  }
}
