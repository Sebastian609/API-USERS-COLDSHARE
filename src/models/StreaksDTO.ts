export interface StreaksDTO {
    userId: number;           // ID del usuario
    currentStreak: number;     // Racha actual (días consecutivos de actividad)
    maxStreak: number;         // Máxima racha alcanzada por el usuario
    lastActivity: Date;        // Fecha de la última actividad
  }