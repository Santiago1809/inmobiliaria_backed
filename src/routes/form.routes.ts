import { formController } from "@controllers/form.controller";
import express,  {type Router } from "express";

const router: Router = express.Router()

router.post('/', formController.saveForm)
router.get('/', formController.getForms)

export default router