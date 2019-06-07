var express = require('express');
var router = express.Router();
const loginController = require('../controllers/loginController');

router.post('/login', loginController.authenticateUser);
router.post('/register', loginController.registerUser);

module.exports = router;


