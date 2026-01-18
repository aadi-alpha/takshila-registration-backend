// student routes approve(payment = paid) , get studentfor student View, update student data, deleteStudent

const express = require('express')
const { approveStudents, FindStudentById, deleteStudentById, updateStudent } = require('../Controllers/studentsController')
const authMiddlewares = require('../middlewares/authMiddleware')
const studentRoutes = express.Router()
studentRoutes.use(authMiddlewares)
studentRoutes.put('/approve-student/:id',approveStudents)
studentRoutes.get('/fetchById-student/:id',FindStudentById)
studentRoutes.delete('/delete-student/:id',deleteStudentById)
studentRoutes.put('/student-update/:id',updateStudent)

module.exports={studentRoutes}