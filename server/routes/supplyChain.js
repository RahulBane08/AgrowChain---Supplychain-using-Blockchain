const express = require('express');
const router = express.Router();

const supplyChainController = require('../controllers/supplyChain.js');

router.post('/register', supplyChainController.register);
router.post('/addData', supplyChainController.addData);
router.get('', supplyChainController.showAll);

module.exports = router;
