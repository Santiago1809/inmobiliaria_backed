import { v4 } from "uuid";
import type { Login, User } from "../interface/user";
import { query } from "../lib/database";
import { decrypt, encrypt } from "../lib/encrypter";

export const userService = {
  registerUser: async (user: User) => {
    const { nombre, apellido, email, contraseña } = user;
    const newContraseña = encrypt(contraseña);
    return await query(
      "INSERT INTO users(id, nombre, apellido, email, contraseña) VALUES ($1, $2, $3, $4, $5)",
      [v4(), nombre, apellido, email, newContraseña]
    );
  },
  loginUser: async (credential: Login) => {
    const sql = await query("SELECT contraseña FROM users WHERE email = $1", [
      credential.email,
    ]);;
    return sql.length > 0 && decrypt(sql[0]?.contraseña, credential.contraseña)
  },
};
