import type { Request, Response } from "express";
import { userService } from "../services/user.service";

export const userController = {
  createUser: async (req: Request, res: Response) => {
    try {
      const response = await userService.registerUser(req.body);
      res.status(201).json(response);
    } catch (err) {
      res.status(500).json({ err });
    }
  },
  loginUser: async (req: Request, res: Response) => {
    const response = await userService.loginUser(req.body);
    try {
      res.status(200).json({ access: response });
    } catch (err) {
      res.status(200).json({ access: response });
    }
  },
};
