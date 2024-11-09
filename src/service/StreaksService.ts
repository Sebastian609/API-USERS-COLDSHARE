import { StreaksDTO } from '../models/StreaksDTO';
import { Database } from '../Database';  // Asegúrate de importar la clase Database correctamente

export class StreaksService {
  // Método para obtener la racha de un usuario
  async getStreak(userId: number): Promise<StreaksDTO> {
    const sql = `SELECT * FROM tbl_streaks WHERE usuario_id = ?`;
    
    try {
      const result = await Database.executeSelect(sql, [userId]);
      
      if (result.length === 0) {
        throw new Error('No se encontraron datos de racha para este usuario');
      }

      const streak = result[0];
      return {
        userId: streak.user_id,
        currentStreak: streak.current_streak,
        maxStreak: streak.max_streak,
        lastActivity: streak.last_activity
      };
    } catch (error) {
      console.error('Error al obtener la racha:', error);
      throw error;
    }
  }

  // Método para actualizar la racha de un usuario
  async updateStreak(userId: number): Promise<StreaksDTO> {
    const selectSql = `SELECT * FROM tbl_streaks WHERE usuario_id = ?`;
    const insertSql = `INSERT INTO tbl_streaks (usuario_id, current_streak, max_streak, last_activity) VALUES (?, ?, ?, ?)`;
    const updateSql = `UPDATE tbl_streaks SET current_streak = ?, max_streak = ?, last_activity = ? WHERE usuario_id = ?`;
    
    const today = new Date();
    const oneDayInMs = 24 * 60 * 60 * 1000;

    try {
      // Obtener la racha actual del usuario
      const result = await Database.executeSelect(selectSql, [userId]);
      const streak = result[0];

      if (!streak) {
        // Si no existe la racha, crearla
        await Database.executeInsert(insertSql, [userId, 1, 1, today]);
        return {
          userId,
          currentStreak: 1,
          maxStreak: 1,
          lastActivity: today
        };
      } else {
        const lastActivity = new Date(streak.last_activity);
        const differenceInDays = Math.floor((today.getTime() - lastActivity.getTime()) / oneDayInMs);

        if (differenceInDays === 1) {
          // Aumentar la racha si es consecutiva
          const newCurrentStreak = streak.current_streak + 1;
          const newMaxStreak = Math.max(newCurrentStreak, streak.max_streak);
          await Database.executeInsert(updateSql, [newCurrentStreak, newMaxStreak, today, userId]);
          
          return {
            userId,
            currentStreak: newCurrentStreak,
            maxStreak: newMaxStreak,
            lastActivity: today
          };
        } else if (differenceInDays > 1) {
          // Reiniciar la racha si el usuario no fue consecutivo
          await Database.executeInsert(updateSql, [1, streak.max_streak, today, userId]);
          return {
            userId,
            currentStreak: 1,
            maxStreak: streak.max_streak,
            lastActivity: today
          };
        } else {
          // No hacer nada si la racha ya fue actualizada hoy
          return {
            userId,
            currentStreak: streak.current_streak,
            maxStreak: streak.max_streak,
            lastActivity: streak.last_activity
          };
        }
      }
    } catch (error) {
      console.error('Error al actualizar la racha:', error);
      throw error;
    }
  }
}
