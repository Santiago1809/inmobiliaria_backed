import type { Propiedad } from "../interface/propiedad";
import { query } from "../lib/database";

const propiedadService = {
  getAllPropiedades: async (): Promise<unknown> => {
    return await query("SELECT * FROM properties");
  },
  getPropiedad: async (id: string) => {
    return await query("SELECT * FROM properties where id = $1", [id]);
  },
  createPropiedad: async (propiedad: Propiedad) => {
    const { calle, numero, ciudad, estado, pais, codigoPostal } =
      propiedad.direccion;
    query(
      "INSERT INTO addresses(calle, numero, ciudad, estado, pais, codpostal) VALUES ($1, $2, $3, $4, $5, $6)",
      [calle, numero, ciudad, estado, pais, codigoPostal]
    );
    const getDireccionId = await query(
      "SELECT id FROM addresses WHERE calle = $1 AND numero = $2 AND estado = $3 AND ciudad = $4",
      [calle, numero, estado, ciudad]
    );
    const direccionId = getDireccionId[0].id
    const {
      usuarioId,
      titulo,
      descripcion,
      precio,
      habitaciones,
      banos,
      area,
      imagenes,
      amenidades,
      tipo,
      departamento,
      createdAt,
      updatedAt,
    } = propiedad;

    return await query(
      "INSERT INTO properties(userId, titulo, descripcion, precio, direccionId, habitaciones, banos, area, imagenes, amenidades, tipo, estado, createdAt, updatedAt) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)",
      [
        usuarioId,
        titulo,
        descripcion,
        precio,
        direccionId,
        habitaciones,
        banos,
        area,
        imagenes,
        amenidades,
        tipo,
        departamento,
        createdAt,
        updatedAt,
      ]
    );
  },
};

export default propiedadService;
