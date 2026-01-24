const express = require('express')
const authMiddlewares = require('../middlewares/authMiddleware')
const { allowRoles } = require('../middlewares/allowedRoles')
const { CreateBatch, BatchFetch } = require('../Controllers/BatchController')
const batchRoutes = express.Router()


batchRoutes.post('/batch-insert',authMiddlewares,allowRoles("admin","superAdmin","receptionist"), CreateBatch)
batchRoutes.get('/batch-fetch',authMiddlewares,allowRoles("admin","superAdmin","receptionist"), BatchFetch)

module.exports = {batchRoutes}
