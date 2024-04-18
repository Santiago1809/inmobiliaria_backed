import { Pool } from "pg";
import { config } from "dotenv";
config();

const connection = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: 5432,
};

const pool = new Pool(connection);

export async function query(sql: string, params?: string[]) {
  let client;
  try {
    client = await pool.connect();
    await client.query("BEGIN");

    const result = await client.query(sql, params as string[]);

    await client.query("COMMIT");
    return result.rows;
  } catch (err) {
    await client?.query("ROLLBACK");
    throw err;
  } finally {
    client?.release();
  }
}