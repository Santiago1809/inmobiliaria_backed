import type { Request, Response } from "express";
import propiedadService from "../services/propiedades.service";

const propiedadController = {
  geAllPropiedades: async (req: Request, res: Response) => {
    try {
      const propiedades = await propiedadService.getAllPropiedades()
      res.status(200).json(propiedades)
    } catch (err) {
      res.status(500).json({err})
    }
  },
  getPropiedad: async (req: Request, res: Response) => {
    try {
      const propiedad = await propiedadService.getPropiedad(req.params.id)
      res.status(200).json(propiedad)
    } catch (err) {
      res.status(500).json({err})
    }
  }
}
export {propiedadController}