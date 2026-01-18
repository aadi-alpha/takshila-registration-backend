// all routes of UserTakshila insert , login , update(forgotten password)
const express = require('express')
const { UserTakshilaLogin } = require('../Controllers/UserTakshila')
const {CreateBatch , BatchFetch}=require('../Controllers/BatchController')



const NoMiddleWareRoutes = express.Router()
NoMiddleWareRoutes.post('/UserTakshila-fetch-login', UserTakshilaLogin)
NoMiddleWareRoutes.post('/batch-insert', CreateBatch)
NoMiddleWareRoutes.get('/batch-fetch', BatchFetch)
module.exports = { NoMiddleWareRoutes }
