const express = require('express')
const userController = require('../../controllers/userController')
const jwtManager = require('../../security/jwtManager')

const router  = express.Router()

router
    .get('/', userController.getAllUsers)
    .get('/?page=:page&limit=:limit', userController.getAllUsers)
    .get('/:userId', userController.getUser)
    .post('/', userController.registerUser)
    .post('/login', userController.login)
    .post('/forgot-password', userController.getResetPasswordToken)
    .put('/:userId', userController.updateUser)
    .patch('/update-password', jwtManager.validateToken, userController.updatePassword)
    .delete('/:userId', userController.deleteUser)

module.exports = router



    

