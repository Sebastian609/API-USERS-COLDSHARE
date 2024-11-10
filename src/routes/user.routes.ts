import {Router} from 'express'
import { UserController } from '../controllers/UserController';

const router = Router()

const controller = new UserController();

router.post('/auth', controller.onAuth.bind(controller))
router.get('/getall', controller.onGetAll.bind(controller))
router.get('/find/:id', controller.onFind.bind(controller))
router.post('/create', controller.onCreate.bind(controller))
router.put('/update', controller.onUpdate.bind(controller))
router.delete('/delete/:id', controller.onDelete.bind(controller))

export default router;