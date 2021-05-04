const userController = {};

const User = require('../models/User');

userController.getUsers = async (req, res) =>{
    const users = await User.find();
    res.json(users);
};
userController.getUser = (req, res) =>{res.send("GetOne")};

userController.createUser = (req, res) =>{
    console.log(req.body);
    res.send("Crear usuario");
};

userController.editUser = (req, res) =>{res.send("Edit")};
userController.deleteUser = (req, res) =>{res.send("Delete")};

module.exports = userController;