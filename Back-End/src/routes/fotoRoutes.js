import { Router } from 'express';

import loginRequired from '../middlewares/loginRequired';
import fotoController from '../controllers/fotoController';

const router = new Router();

router.post('/', loginRequired, fotoController.store);

export default router;
