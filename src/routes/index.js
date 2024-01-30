var express = require('express');
var router = express.Router();

// Require controller modules.
const message_controller = require("../controllers/message-controller");
const form_controller = require("../controllers/form-controller");

/* GET home page. */
router.get('/', form_controller.homepage);

router.get('/signup', form_controller.signup_get);
router.post('/signup', form_controller.signup_post);

router.get('/login', form_controller.login_get);
router.post('/login', form_controller.login_post);

router.get('/logout', form_controller.logout_get);

router.get('/messages', message_controller.message_list);


module.exports = router;
