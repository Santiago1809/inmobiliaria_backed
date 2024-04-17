import { Client } from "pg";
import { config } from "dotenv";

config();

const connection = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: 5432
};

const client = new Client(connection);

client.connect((err) => {
  if (err) throw "Connection error";
  console.log("Connected to database!");
})

export function query(sql: string, params?: string[]) {
  return new Promise((resolve, reject) => {
    client.query(sql, params as string[], (err, result) => {
      if (err) {
        reject(err["message"]);
      } else {
        resolve(result['rows']);
      }
    });
  ;
  });
}
