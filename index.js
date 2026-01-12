const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { StudentRegisterRouter } = require('./App/Routes/RegistrationRoutes')
const { adminRouter } = require('./App/Routes/adminRoutes')
const { admStudentFetch } = require('./App/Routes/admStudentsRoutes')
const { studentRoutes } = require('./App/Routes/StudentRoutes')
require('dotenv').config()


let app = express()
app.use(cors());
app.use(express.json())
app.use('/api/web/', StudentRegisterRouter)
app.use('/api/web/', adminRouter)
app.use('/api/web/',admStudentFetch)
app.use('/api/web/',studentRoutes)


mongoose.connect(process.env.DBURL).then(() => {
    console.log('server successfully running')
    app.listen(process.env.PORT || 8000, () => {
        console.log("sever successfully running...")
    })
})