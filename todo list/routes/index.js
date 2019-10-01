const express = require('express');
const router = express.Router();
const homecontroller = require('../controllers/home_controllers');
console.log('Router Loaded');
router.get('/', homecontroller.home);



router.post("/add-item",homecontroller.createTask);




module.exports=router
