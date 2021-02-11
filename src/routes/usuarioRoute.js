const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuarioController.js');

router.post('/login/', controller.login);
router.post('/', controller.cadastro);
router.put('/:id', controller.mudarSenha);

module.exports = router;