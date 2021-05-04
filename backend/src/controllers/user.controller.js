const userController = {};

const User = require('../models/User');

userController.getUsers = async (req, res) =>{
    const users = await User.find();
    res.json(users);
};
userController.getUser = async (req, res) =>{
    const user = await User.findById(req.params.id);
    res.send(user)
};

userController.createUser = async (req, res) =>{
    const newUser = new User(req.body);
    // console.log(req.body);
    // console.log(newUser);
    await newUser.save();
    res.send("Usuario creado");
    res.send(newUser);
};

userController.editUser = async (req, res) =>{
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.send("Usuario editado");
};

userController.deleteUser = async (req, res) =>{
    await User.findByIdAndDelete(req.params.id);
    res.send("Usuario eliminado")
};

module.exports = userController;