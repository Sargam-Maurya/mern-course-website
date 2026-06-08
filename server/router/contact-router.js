const express = require("express")
const router = express.Router();
const contactForm = require("../controllers/contact-controller")
const { contactSchema } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware") //this is middleware

router.route("/contact").post(validate(contactSchema),contactForm);

module.exports = router; // Service -2