export interface Propiedad {
  id: string; // Identificador único de la propiedad
  titulo: string; // Título o nombre de la propiedad
  descripcion: string; // Descripción detallada de la propiedad
  precio: string; // Precio de la propiedad
  habitaciones: string; // Número de habitaciones
  banos: string; // Número de baños
  area: string; // Área total de la propiedad en metros cuadrados
  direccion: {
    calle: string;
    numero: string;
    ciudad: string;
    estado: string;
    codigoPostal: string;
    pais: string
  }; // Dirección detallada de la propiedad
  imagenes: string ; // URLs de las imágenes de la propiedad
  amenidades: string; // Lista de amenidades de la propiedad
  tipo: TipoPropiedad; // Tipo de propiedad
  estatus: 'disponible' | 'vendido' | 'alquilado'; // Estatus actual de la propiedad
  publicadaEn: string; // Fecha en que se publicó la propiedad
  actualizadaEn: string; // Fecha de la última actualización de la propiedad
  usuarioId: string; // Id del usuario dueño de la propiedad
}
export type TipoPropiedad = 'casa' | 'apartamento' | 'terreno';