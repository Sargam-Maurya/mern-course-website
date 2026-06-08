const express = require('express');
const router = express.Router();
const authcontrollers = require('../controllers/auth-controller');
const {signupSchema, loginSchema} = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware") //this is middleware
const authMiddleware = require("../middlewares/auth-middleware") //#33-6

router.route('/').get(authcontrollers.home);
router.route('/register').post(validate(signupSchema), authcontrollers.register);
router.route('/login').post(validate(loginSchema),authcontrollers.login); //stL-1
router.route('/user').get(authMiddleware, authcontrollers.user) //#33-1 #33-5

module.exports = router;