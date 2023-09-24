const User = require('../database/User')

const getAllUsers = (limit, offset) => {
    return User.getAllUsers(limit, offset)
}

const getTotalUsers = () => {
    return User.getTotalUsers()
}

const getUser = (idUser) => {
    return User.getUser(idUser)
}

const getResetPasswordToken = (email) => {
    return User.getResetPasswordToken(email)
}

const registerUser = (newUser) => {
    return User.registerUser(newUser)
}

const login = (loginData) => {
    return User.login(loginData)
}

const updateUser = (idUser, newUser) => {
    return User.updateUser(idUser, newUser)
}

const updatePassword = (email, newPassword) => {
    return User.updatePassword(email, newPassword)
}

const deleteUser = (idUser) => {
    return User.deleteUser(idUser)
}

module.exports = {
    getAllUsers,
    getTotalUsers,
    getUser,
    getResetPasswordToken,
    registerUser,
    login,
    updateUser,
    updatePassword,
    deleteUser
}