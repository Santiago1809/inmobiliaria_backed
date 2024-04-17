import type { Propiedad } from "../interface/propiedad";
import { query } from "../lib/database";

const propiedadService = {
  getAllPropiedades: async () => {
    return await query("SELECT * FROM propiedades")
  },
  getPropiedad: async (id: string) => {
    return await query("SELECT * FROM propiedades where id = ?", id);
  },
  createPropiedad: async (propiedad: Propiedad) => {
    return await query("INSERT INTO propiedades(id, titulo, descripcion, precio, habitaciones, banos, area, calle, numero, ciudad, estado, codigoPostal, pais, imagenes, amenidades, tipo, estatus, publicadaEn, actualizadaEn, usuarioId) VALUES (?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [propiedad.id, propiedad.titulo, propiedad.descripcion, propiedad.descripcion, propiedad.precio, propiedad.habitaciones, propiedad.banos, propiedad.area, propiedad.direccion.calle, propiedad.direccion.numero, propiedad.direccion.estado, propiedad.direccion.estado, propiedad.direccion.codigoPostal, propiedad.direccion.pais, propiedad.imagenes, propiedad.amenidades, propiedad.tipo, propiedad.estatus, propiedad.publicadaEn, propiedad.actualizadaEn, propiedad.usuarioId])
  }
};

export default propiedadService;