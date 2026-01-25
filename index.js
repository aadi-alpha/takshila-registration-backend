const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const { StudentRegisterRouter } = require('./App/Routes/RegistrationRoutes')
const { admStudentFetch } = require('./App/Routes/admStudentsRoutes')
const { studentRoutes } = require('./App/Routes/StudentRoutes')
const { UserTakshilaRouter } = require('./App/Routes/UserTakshila')
const { BranchDetailsFetch } = require('./App/Routes/BranchRoutes')
const { NoMiddleWareRoutes } = require('./App/Routes/NoMiddlewareRoutes')
const SalaryRouter = require('./App/Routes/SalaryRoutes')
const TestRouter = require('./App/Routes/TestRoutes')
const { AttendanceRouter } = require('./App/Routes/AttendanceRoutes')
const { FeesRouter } = require('./App/Routes/FeesRouter')
const { batchRoutes } = require('./App/Routes/BatchRoutes')

require('dotenv').config()

const app = express()

// ✅ CORS configuration
const corsOptions = {
  origin: [
    "https://takshila-registration.web.app", // frontend prod
    "http://localhost:5173"                  // frontend dev
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}

// 🔹 Must come BEFORE routes
app.use(cors(corsOptions))
app.use(express.json())

// 🔹 Optional: explicitly respond to preflight requests


// ROUTES
app.use('/api/web/', NoMiddleWareRoutes)
app.use('/api/web/', UserTakshilaRouter)
app.use('/api/web/', StudentRegisterRouter)
app.use('/api/web', BranchDetailsFetch)
app.use('/api/web/', admStudentFetch)
app.use('/api/web/', studentRoutes)
app.use('/api/web/', batchRoutes)
app.use('/api/web/', SalaryRouter)
app.use('/api/web/', TestRouter)
app.use('/api/web/', AttendanceRouter)
app.use('/api/web/', FeesRouter)

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).json({ message: "Something went wrong" })
})

// DATABASE + SERVER
mongoose.connect(process.env.DBURL).then(() => {
    console.log('MongoDB connected')
    app.listen(process.env.PORT || 8000, () => {
        console.log("Server running...")
    })
})
