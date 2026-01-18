const express=require('express')
let SalaryRouter = express.Router()
const authMiddlewares = require('../middlewares/authMiddleware')
const { InsertSalary, getSalaries, UpdateSalary, getSalaryById } = require('../Controllers/SalaryController')

SalaryRouter.use(authMiddlewares)
SalaryRouter.post('/insert-salary',InsertSalary)
SalaryRouter.get('/get-salaries',getSalaries)
SalaryRouter.put('/update-salary/:salaryId',UpdateSalary)
SalaryRouter.get("/SalaryTakshila-fetch-id/:SalaryId", getSalaryById);

module.exports=SalaryRouter