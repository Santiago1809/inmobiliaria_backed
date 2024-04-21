import type { Request, Response } from "express";
import { userService } from "@services/user.service";
import { generateAccessToken } from "@/lib/jwt";

export const userController = {
  createUser: async (req: Request, res: Response) => {
    const response = await userService.registerUser(req.body);
    try {
      const accessToken = generateAccessToken(response);
      response.access ? res.header('Authorization', accessToken).status(200).json( response ) : res.status(403).json(response);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  loginUser: async (req: Request, res: Response) => {
    const response = await userService.loginUser(req.body);
    try {
      const accessToken = generateAccessToken(response)
      response.access ? res.header('Authorization', accessToken).status(200).json( response ) : res.status(403).json(response);
    } catch (err) {
      res.status(200).json( response );
    }
  },
};
