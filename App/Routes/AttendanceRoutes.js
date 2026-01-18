const express =  require('express')
const authMiddlewares = require('../middlewares/authMiddleware')
const { insertAttendance, fetchAttendance } = require('../Controllers/AttendanceController')
let AttendanceRouter=express.Router()

AttendanceRouter.use(authMiddlewares)

AttendanceRouter.post('/attendance-insert',insertAttendance)
AttendanceRouter.get('/attendance-fetch',fetchAttendance)
module.exports={AttendanceRouter}