"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _userController = require('../controllers/userController'); var _userController2 = _interopRequireDefault(_userController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();
// Não deveria existir, está implementado apenas para o estudo do CRUD
// router.get('/', loginRequired, userController.index); // Listar todos os usuarios
// router.get('/:id', userController.show); // Listar um unico usuario

router.post('/', _userController2.default.store); // Criar um usuario
router.put('/', _loginRequired2.default, _userController2.default.update); // Atualizar um usuario
router.delete('/', _loginRequired2.default, _userController2.default.delete); // Apagar um usuario

exports. default = router;

/*
  index -> lista todos os usuarios - GET
  store/create -> cria um novo usuario - POST
  delete -> apaga um usuario - DELETE
  show -> mostra um usuario - GET
  update -> atualiza um usuario - PATCH OU PUT -> PATCH É PRA SUBSTITUIR APENAS UM VALOR
*/
