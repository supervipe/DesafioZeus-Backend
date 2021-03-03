const express = require('express');
const router = express.Router();
const controller = require('../controllers/racaoController.js');

router.get('/historico/:id', controller.historico);
router.post('/:id', controller.racaoMensal);
router.post('/', controller.compra);

module.exports = router;