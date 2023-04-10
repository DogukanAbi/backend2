const express = require('express');
const { checkoutCtrlFunction} = require('../controllers/checkoutCtrlFile');


const router = express.Router();

router.get('/', checkoutCtrlFunction);

module.exports = router;