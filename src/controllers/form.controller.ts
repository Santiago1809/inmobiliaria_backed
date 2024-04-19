import { formService } from "@/services/form.service";
import type { Request, Response } from "express";

export const formController = {
  saveForm: async (req: Request, res: Response) => {
    try {
      const response = await formService.saveForm(req.body);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getForms: async (req: Request, res:Response) => {
    try {
      const response = await formService.getForms();
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
};
