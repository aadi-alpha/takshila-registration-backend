const express =  require('express')
const authMiddlewares = require('../middlewares/authMiddleware')
const { insertAttendance, fetchAttendance } = require('../Controllers/AttendanceController')
const { allowRoles } = require('../middlewares/allowedRoles')
let AttendanceRouter=express.Router()

AttendanceRouter.post('/attendance-insert',authMiddlewares,allowRoles("admin","receptionist"), insertAttendance)
AttendanceRouter.get('/attendance-fetch',authMiddlewares,allowRoles("admin","receptionist"),  fetchAttendance)
module.exports={AttendanceRouter}