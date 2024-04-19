import type { Request, Response } from "express";
import propiedadService from "@services/propiedades.service";

const propiedadController = {
  geAllProperties: async (req: Request, res: Response) => {
    try {
      const propiedades = await propiedadService.getAllProperties();
      res.status(200).json(propiedades);
    } catch (err) {
      res.status(500).json({ err });
    }
  },
  getProperty: async (req: Request, res: Response) => {
    try {
      const propiedad = await propiedadService.getProperty(req.params.id);
      res.status(200).json(propiedad);
    } catch (err) {
      res.status(500).json({ err });
    }
  },
  createProperty: async (req: Request, res: Response) => {
    try {
      const propiedad = await propiedadService.createProperty(req.body);
      res.status(201).json(propiedad);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getPropertiesType: async (req: Request, res: Response) => {
    try {
      const propiedades = await propiedadService.getPropertiesType(req.params.tipo);
      res.status(200).json(propiedades);
    } catch (err) {
      res.status(500).json({ err });
    }
  },
};
export { propiedadController };
