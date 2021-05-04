const { Router } = require('express');
const router = Router();

const userController = require('../controllers/user.controller');

router.get('/', userController.getUsers);

router.get('/:id', userController.getUser);

router.post('/', userController.createUser);

router.put('/:id', userController.editUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;