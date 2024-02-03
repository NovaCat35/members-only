var express = require('express');
var router = express.Router();

// Require controller modules.
const info_controller = require("../controllers/info-controller");
const form_controller = require("../controllers/form-controller");

/* GET home page. */
router.get('/', info_controller.homepage);

router.get('/signup', form_controller.signup_get);
router.post('/signup', form_controller.signup_post);

router.get('/login', form_controller.login_get);
router.post('/login', form_controller.login_post);

router.get('/logout', form_controller.logout_get);

// router.get('/messages', info_controller.message_list);
router.post('/message-post', form_controller.message_post);
router.get('/delete/:id', info_controller.message_delete);

router.get('/auth-status', info_controller.status_page_get);
router.post('/auth-status/member', form_controller.status_member_post);
router.post('/auth-status/admin', form_controller.status_admin_post);

router.get('/admin-access', info_controller.admin_get);

router.get('/profile', info_controller.profile_get);


module.exports = router;
