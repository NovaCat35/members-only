var express = require('express');
var router = express.Router();

// Require controller modules.
const message_controller = require("../controllers/messageController");
const form_controller = require("../controllers/formController");

/* GET home page. */
router.get('/', form_controller.homepage);

router.get('/signup', form_controller.signup_get);

router.get('/login', form_controller.login_get);

module.exports = router;
