import express, { Router } from "express";
import { propiedadController } from "../controllers/propiedad.controller";
import { validateAccessToken } from "@/lib/jwt";

const router: Router = express.Router();

router.get("/" ,propiedadController.geAllProperties);
router.get("/type/:tipo", propiedadController.getPropertiesType);
router.get("/:id", propiedadController.getProperty);
router.post("/", validateAccessToken, propiedadController.createProperty);
export default router;
