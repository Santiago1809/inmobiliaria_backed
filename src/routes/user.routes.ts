import express, {Router} from 'express'
import { userController } from '../controllers/user.controller';


const router: Router = express.Router();

router.post('/register', userController.createUser)
router.post('/login', userController.loginUser)

export default router