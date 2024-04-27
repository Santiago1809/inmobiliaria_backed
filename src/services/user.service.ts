import { v4 } from "uuid";
import type { Login, User } from "../interface/user";
import { query } from "../lib/database";
import { decrypt, encrypt } from "../lib/encrypter";

export const userService = {
  registerUser: async (user: User) => {
    const { nombre, apellido, email, password: contraseña } = user;
    console.log(user);
    const newContraseña = await encrypt(contraseña);
    
    try {
      await query(
        "INSERT INTO users(id, nombre, apellido, email, contraseña) VALUES ($1, $2, $3, $4, $5)",
        [v4(), nombre, apellido, email, newContraseña]
      );
    } catch (e) {
      return { access: false };
    }
    const sql = await query("SELECT id, rol FROM users WHERE email = $1", [
      email,
    ]);
    return sql.length > 0
      ? { access: true, id: sql[0]?.id, email, rol: sql[0].rol }
      : { access: false };
  },
  loginUser: async (credential: Login) => {
    const sql = await query(
      "SELECT contraseña, id, email, rol FROM users WHERE email = $1 LIMIT 1",
      [credential.email]
    );
    return sql.length > 0 && await decrypt(sql[0]?.contraseña, credential.password)
      ? {
          access:
            sql.length > 0 && decrypt(sql[0]?.contraseña, credential.password),
          id: sql[0]?.id,
          email: sql[0].email,
          rol: sql[0].rol,
        }
      : {
          access:
            sql.length > 0 && decrypt(sql[0]?.contraseña, credential.password),
        };
  },
};
