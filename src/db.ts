
import { createPool } from "mysql2/promise";
import mysql from 'mysql2/promise'


const config = {
   host: '62.171.180.36',
   user: 'coldshare',
   password: 'Id3sB8~vJ}W0r,2Z$7p^c',
   port: 3306,
   database: 'coldshare'
}
const pool = createPool(config)
const dbConfig: mysql.PoolOptions = config
export { dbConfig, pool }; 