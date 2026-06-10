const express = require('express');
const adminController = require("../controllers/admin-controller") //admin-5
const authMiddleware = require("../middlewares/auth-middleware") //admin-8
const adminMiddleware = require("../middlewares/admin-middleware") 
const router = express.Router();

router.route("/users").get(authMiddleware, adminMiddleware, adminController.getAllUsers); //admin -1

router.route("/users/:id").get(authMiddleware, adminMiddleware, adminController.getUserById) //edit -1

router.route("/users/update/:id").patch(authMiddleware, adminMiddleware, adminController.updateUserById) //update/edit -3

router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware, adminController.deleteUserById) //delete s-2

router.route("/contacts/delete/:id").delete(authMiddleware, adminMiddleware, adminController.deleteContactById)

router.route("/contacts").get(authMiddleware, adminMiddleware, adminController.getAllContacts)

module.exports = router;
