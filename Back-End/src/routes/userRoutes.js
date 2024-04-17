import { Router } from 'express';
import userController from '../controllers/userController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();
// Não deveria existir, está implementado apenas para o estudo do CRUD
// router.get('/', loginRequired, userController.index); // Listar todos os usuarios
// router.get('/:id', userController.show); // Listar um unico usuario

router.post('/', userController.store); // Criar um usuario
router.put('/', loginRequired, userController.update); // Atualizar um usuario
router.delete('/', loginRequired, userController.delete); // Apagar um usuario

export default router;

/*
  index -> lista todos os usuarios - GET
  store/create -> cria um novo usuario - POST
  delete -> apaga um usuario - DELETE
  show -> mostra um usuario - GET
  update -> atualiza um usuario - PATCH OU PUT -> PATCH É PRA SUBSTITUIR APENAS UM VALOR
*/
