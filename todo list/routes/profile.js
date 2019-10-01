const express = require('express');
const router = express.Router();
const profilecontroller = require('../controllers/profile_controller');
console.log('Router Loaded 2');
router.get('/', profilecontroller.profile);
module.exports = router;

// Where have you defined your routes for add item?????