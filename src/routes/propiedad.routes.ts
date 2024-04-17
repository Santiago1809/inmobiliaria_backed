import express, {Router} from 'express'
import { propiedadController } from '../controllers/propiedad.controller';

const router: Router = express.Router();

router.get('/propiedades', propiedadController.geAllPropiedades)
router.get('/propiedades/:id', propiedadController.getPropiedad)
export default router;