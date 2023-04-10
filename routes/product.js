const express = require('express');
const {productCtrlFile} = require('../controllers/productCtrlFile');


const router = express.Router();

router.get('/', productCtrlFile);

module.exports = router;