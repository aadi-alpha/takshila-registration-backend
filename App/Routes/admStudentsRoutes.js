// routes where adminStudent both
const express = require('express')
const { findStudentsBatch } = require('../Controllers/admStudentController')
let admStudentFetch = express.Router()

admStudentFetch.get('/students-batchwise',findStudentsBatch)

module.exports={admStudentFetch}