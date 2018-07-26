const express = require('express');
const router = express.Router();
const userController = require('../controller/user.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile', userController.profile)

router.post('/loginfb', userController.loginfb)

router.post('/register', userController.register)

router.post('/login', userController.login)

router.put('/edit-profile/:id',userController.update)

router.delete('/delete/:id', userController.delete)

module.exports = router;
