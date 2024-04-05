const express = require('express');
const stockSController = require('../controller/controller');

const router = express.Router();

router.post("/", stockSController.postStock);
router.get("/", stockSController.getStock);

module.exports = router