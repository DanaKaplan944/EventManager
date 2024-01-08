var express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getAllUsers, (req, res) => {
  res.status(200).json(res.locals.allUsers);
});

module.exports = router;
