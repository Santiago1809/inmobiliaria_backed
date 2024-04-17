import { query } from "../lib/database";

const propiedadService = {
  getAllPropiedades: async () => {
    return await query("SELECT * FROM propiedades")
  },
  getPropiedad: async (id: string) => {
    return await query("SELECT * FROM propiedades where id = ?", id);
  },
  createPropiedad: async (propiedad: any) => {
    return [
      {
        id: "20",
        titulo: "Terreno con vistas a la montaña",
        descripcion:
          "Terreno con una excepcional vista panorámica de las montañas circundantes.",
        precio: 150000,
        habitaciones: 0,
        banos: 0,
        area: 1000,
        direccion: {
          calle: "Camino de la Montaña",
          numero: "456",
          ciudad: "Ciudad T",
          estado: "Estado G",
          codigoPostal: "98765",
          pais: "País",
        },
        imagenes: [
          "https://website-aa-assets.s3.amazonaws.com/MLSPropertiesPhotos/244579/lote-residencial-para-venta-en-medellin-poblado_l01.jpg",
          "terreno12.jpg",
        ],
        amenidades: [
          "Vista a la montaña",
          "Zona tranquila",
          "Listo para construir",
        ],
        tipo: "terreno",
        estatus: "disponible",
        publicadaEn: new Date("2023-02-15"),
        actualizadaEn: new Date("2023-04-24"),
      },
    ]
  }
};

export default propiedadService;