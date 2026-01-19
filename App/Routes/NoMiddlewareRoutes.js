// all routes of UserTakshila insert , login , update(forgotten password)
const express = require('express')
const { UserTakshilaLogin } = require('../Controllers/UserTakshila')
const {CreateBatch , BatchFetch}=require('../Controllers/BatchController')
const { AllBranchesGet } = require('../Controllers/BranchController')
const { insertStudents } = require('../Controllers/StudentRegisterController')



const NoMiddleWareRoutes = express.Router()
NoMiddleWareRoutes.get('/branch-fetch', AllBranchesGet)
NoMiddleWareRoutes.post('/student-insert', insertStudents)
NoMiddleWareRoutes.post('/UserTakshila-fetch-login', UserTakshilaLogin)
NoMiddleWareRoutes.post('/batch-insert', CreateBatch)
NoMiddleWareRoutes.get('/batch-fetch', BatchFetch)
module.exports = { NoMiddleWareRoutes }
