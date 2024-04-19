import express, { Router } from "express";
import { propiedadController } from "../controllers/propiedad.controller";

const router: Router = express.Router();

router.get("/", propiedadController.geAllProperties);
router.get("/type/:tipo", propiedadController.getPropertiesType);
router.get("/:id", propiedadController.getProperty);
router.post("/", propiedadController.createProperty);
export default router;
