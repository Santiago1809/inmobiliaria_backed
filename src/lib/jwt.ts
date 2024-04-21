import createError from "http-errors";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import type { NextFunction, Request, Response } from "express";

dotenv.config();
const secret = process.env.SECRET_KEY;

export function generateAccessToken(info: object) {
  return jwt.sign(info, secret, { expiresIn: "1h" });
}
export function validateAccessToken(
  req: Request,
  res: Response,
  next: NextFunction
) {

  const accessToken = req.headers["authorization"];
  
  if (!accessToken) {
    res.status(403).send({ access: false, message: 'No token provided' });
  } else {
    jwt.verify(accessToken, secret, (err, user) => {
      if(err){
        res.status(403).send({ access: false, message: 'Invalid token' });
      } else {
        user?.rol === "administrador" ? next() :  res.status(403).send({ access: false, message: 'Unauthorized access' });
      }
    })
  }
}
