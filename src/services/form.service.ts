import type { Form } from "@/interface/form";
import { query } from "@/lib/database";

export const formService = {
  saveForm: async (info: Form) => {
    const { nombre, apellido, email, celular, propiedadid, mensaje } = info;
    return await query(
      "INSERT INTO form(nombre, apellido, email, celular, propiedadid, mensaje) VALUES ($1, $2, $3, $4, $5, $6)",
      [nombre, apellido, email, celular, propiedadid, mensaje]
    );
  },
  getForms: async () => {
    const forms = await query(`
        SELECT
        f.nombre,
        f.apellido,
        f.email,
        f.celular,
        f.createdat,
        p.titulo,
        p.imagenes
    FROM
        form f
        INNER JOIN properties p ON f.propiedadid = p.id
        `);
    return forms;
  },
};
