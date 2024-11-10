import { Router } from 'express';
import { StreaksController } from '../controllers/StreaksController';

const router = Router();
const streaksController = new StreaksController();

router.post('/update', (req, res) => streaksController.updateStreak(req, res));
router.get('/:userId', (req, res) => streaksController.getStreak(req, res));

export { router as streakRoutes };
