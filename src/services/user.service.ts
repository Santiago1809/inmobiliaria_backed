import { v4 } from "uuid";
import type { User } from "../interface/user";
import { query } from "../lib/database";
import { encrypt } from "../lib/encrypter";

export const userService = {
  createUser: async (user: User) => {
    const {nombre, apellido, email, contraseña} = user
    const newContraseña = encrypt(contraseña)
    return await query("INSERT INTO users(id, nombre, apellido, email, contraseña) VALUES ($1, $2, $3, $4, $5)", [v4(), nombre, apellido, email, newContraseña])
  }
}