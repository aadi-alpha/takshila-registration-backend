const express = require('express')
const { testInsert, getTestsRecordForDropDown, viewTests } = require('../Controllers/TestController')
const authMiddlewares = require('../middlewares/authMiddleware')
const { allowRoles } = require('../middlewares/allowedRoles')
let TestRouter = express.Router()

TestRouter.post('/test-insert',authMiddlewares, allowRoles('admin', "receptionist"), testInsert)
TestRouter.get('/test-list-dropdown',authMiddlewares, allowRoles('admin', "receptionist"), getTestsRecordForDropDown)
TestRouter.get('/TestsFetch',authMiddlewares, allowRoles('admin', "receptionist"), viewTests)
module.exports = TestRouter