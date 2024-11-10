import mysql from 'mysql2/promise';
import { dbConfig } from './db';

export class Database {
  private static pool: mysql.Pool | null = null;
  private static config: mysql.PoolOptions = dbConfig;

  private static async initPool(): Promise<void> {
    if (!Database.pool) {
      Database.pool = mysql.createPool(Database.config);
    }
  }

  static async executeInsert(sql: string, values: any[], connection?: mysql.PoolConnection): Promise<any[] | null> {
    await this.initPool();
    const conn = connection || await this.getConnection();
    try {
      const [result]: any = await conn.execute(sql, values);
      if (result && result.affectedRows <= 0) {
        throw new Error("Error en insert, affected " + result.affectedRows);
      }
      return result;
    } catch (error) {
      console.error('Error al ejecutar la inserción:', error);
      throw error;
    } finally {
      if (!connection) {
        conn.release();
      }
    }
  }

  static async executeSelect(sql: string, values: any[] = [], connection?: mysql.PoolConnection): Promise<any[]> {
    await this.initPool();
    const conn = connection || await this.getConnection();
    try {
      const [rows] = await conn.execute(sql, values);
      return rows as any;
    } catch (error) {
      console.error('Error al ejecutar la consulta:', error);
      throw error;
    } finally {
      if (!connection) {
        conn.release();
      }
    }
  }

  static async select(sql: string, values: any[] = [], connection?: mysql.PoolConnection): Promise<any[]> {
    await this.initPool();
    const conn = connection || await this.getConnection();
    try {
      const [rows] = await conn.execute(sql, values);
      return [rows] as any;
    } catch (error) {
      console.error('Error al ejecutar la consulta:', error);
      throw error;
    } finally {
      if (!connection) {
        conn.release();
      }
    }
  }

  private static async getConnection(): Promise<mysql.PoolConnection> {
    if (!Database.pool) {
      throw new Error('El pool de conexiones no está inicializado.');
    }
    return Database.pool.getConnection();
  }

  static async closePool(): Promise<void> {
    try {
      if (Database.pool) {
        await Database.pool.end();
        Database.pool = null; // Reset pool after closing
        console.log('Pool de conexiones cerrado correctamente.');
      } else {
        console.warn('Intento de cerrar el pool de conexiones que no está inicializado.');
      }
    } catch (error) {
      console.error('Error al cerrar el pool de conexiones:', error);
      throw error;
    }
  }

  static async executeTransaction(callback: (connection: mysql.PoolConnection) => Promise<any>): Promise<any> {
    await this.initPool();
    const connection = await this.getConnection();
    try {
      await connection.beginTransaction();
      const result = await callback(connection);
      await connection.commit();
      return result;
    } catch (error) {
      await connection.rollback();
      console.error('Error en la transacción:', error);
      throw error;
    } finally {
      connection.release();
    }
  }

  static async executeInsertBatch(sql: string, values: any[][], connection?: mysql.PoolConnection): Promise<any[]> {
    await this.initPool();
    const conn = connection || await this.getConnection();
    let insertedRows: any[] = [];

    try {
      if (!connection) await conn.beginTransaction(); // Comienza la transacción solo si no se proporcionó una conexión externa

      for (const params of values) {
        const [result]: any = await conn.execute(sql, params);
        if (result && result.affectedRows > 0) {
          insertedRows.push(result);
        } else {
          throw new Error("Error al insertar una de las respuestas");
        }
      }

      if (!connection) await conn.commit(); // Confirma la transacción solo si no se proporcionó una conexión externa
      return insertedRows;
    } catch (error) {
      if (!connection) await conn.rollback(); // Revierte la transacción solo si no se proporcionó una conexión externa
      console.error('Error al ejecutar la inserción en lote:', error);
      throw error; // Asegúrate de lanzar el error para que el controlador de la transacción lo capture
    } finally {
      if (!connection) conn.release();
    }
  }

  static async executeDelete(sql: string, values: any[], connection?: mysql.PoolConnection): Promise<any> {
    await this.initPool();
    const conn = connection || await this.getConnection();
    try {
        const [result]: any = await conn.execute(sql, values);
        if (!result.affectedRows) {
            throw new Error("No se encontró el registro para eliminar.");
        }
        return result;
    } catch (error) {
        console.error('Error al ejecutar la eliminación:', error);
        throw error;
    } finally {
        if (!connection) {
            conn.release();
        }
    }
}


}
