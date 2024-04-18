import express, {Router} from 'express'
import { propiedadController } from '../controllers/propiedad.controller';

const router: Router = express.Router();

router.get('/', propiedadController.geAllPropiedades)
router.get('/:id', propiedadController.getPropiedad)
export default router;