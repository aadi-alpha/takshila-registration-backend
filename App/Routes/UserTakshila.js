// all routes of UserTakshila insert , login , update(forgotten password)
const express = require('express')
const { UserTakshilaRegister,  UserTakshilaNavId, UserTakshilaRolebased, DeleteUserTakshila, updateUser } = require('../Controllers/UserTakshila')
const authMiddlewares = require('../middlewares/authMiddleware')

const UserTakshilaRouter = express.Router()



UserTakshilaRouter.put('/UserTakshila-update/:id', updateUser)
UserTakshilaRouter.post('/UserTakshila-insert', UserTakshilaRegister)

UserTakshilaRouter.get('/UserTakshila-fetch-id/:id', UserTakshilaNavId)
UserTakshilaRouter.use(authMiddlewares)
UserTakshilaRouter.get('/role-based-users', UserTakshilaRolebased)
UserTakshilaRouter.delete('/delete-user-takshila/:id', DeleteUserTakshila)



module.exports = { UserTakshilaRouter }