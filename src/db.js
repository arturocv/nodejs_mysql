import {createPool} from 'mysql2/promise';
import config from './config/config.js';

export const pool = createPool({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
    port: config.port
});
  

