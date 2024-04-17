import { Router } from 'express';
import tokenController from '../controllers/tokenController';

const router = new Router();

// criando novo token
router.post('/', tokenController.store);

export default router;
