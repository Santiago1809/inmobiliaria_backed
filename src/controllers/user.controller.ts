import type { Request, Response } from "express";
import { userService } from "../services/user.service";

export const userController = {
  createUser: async (req: Request, res: Response) => {
    try {
      const response = await userService.createUser(req.body);
      res.status(201).json(response);
    } catch (err) {
      res.status(500).json({ err });
    }
  },
};
