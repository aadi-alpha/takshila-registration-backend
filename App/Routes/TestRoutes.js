const express = require('express')
const { testInsert, getTestsRecordForDropDown, viewTests } = require('../Controllers/TestController')
const authMiddlewares = require('../middlewares/authMiddleware')
let TestRouter  =  express.Router()
TestRouter.use(authMiddlewares)
TestRouter.post('/test-insert',testInsert)
TestRouter.get('/test-list-dropdown',getTestsRecordForDropDown)
TestRouter.get('/TestsFetch',viewTests)
module.exports=TestRouter