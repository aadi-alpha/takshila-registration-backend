// all routes of admin insert , login , update(forgotten password)
const express = require('express')
const {adminRegister, adminLogin, adminFetch, adminFetchAll} = require('../Controllers/adminController')

const adminRouter  = express.Router()

adminRouter.post('/admin-insert',adminRegister)
adminRouter.post('/admin-login',adminLogin)
adminRouter.get('/admin-fetch/:id',adminFetch)
adminRouter.get('/admin-fetch-all',adminFetchAll)


module.exports={adminRouter}