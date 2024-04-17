import mysql from 'mysql2'
import {config} from 'dotenv'

config()

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
})

connection.connect((err) => {
  if (err) throw "Connection error"
  console.log("Connected to database successfully")
})

export function query(sql: string, params?: string[] | string) {
  return new Promise((resolve, reject) => {
    connection.query(sql, params, (err, result) => {
      if (err) {
        reject(err["message"])
      } else {
        resolve(result)
      }
    })
  })
}
