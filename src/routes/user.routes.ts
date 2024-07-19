import {Router} from 'express'
import { UserController } from '../controllers/UserController';

const router = Router()
const controller = new UserController();

router.post('/auth', controller.onAuth.bind(controller))
router.get('/getall', controller.onGetAll.bind(controller))
router.post('/save', controller.onSave.bind(controller))
router.post('/update', controller.onUpdate.bind(controller))

export default router;