const express = require('express')
const { insertFees, fetchFeesByStudentId, updatefeesbyid, fetchFeesRecordById } = require('../Controllers/FeesController')

const FeesRouter = express.Router()

FeesRouter.post('/fees-insert', insertFees)
FeesRouter.get('/fees-record-fetch', fetchFeesByStudentId)
FeesRouter.patch('/fees-update/:id',updatefeesbyid)
FeesRouter.get('/fees-by-id/:id', fetchFeesRecordById);
module.exports={FeesRouter}