// routes where adminStudent both
const express = require('express')
const { findStudentsBatch, findStudentsForTests, getStudentsNamesByBatch, fetchStudentByBranch } = require('../Controllers/admStudentController')
let admStudentFetch = express.Router()

admStudentFetch.get('/students-batchwise/:BranchId',findStudentsBatch)
admStudentFetch.get('/students-tests',findStudentsForTests)
admStudentFetch.get('/studentsForTestdropDown',getStudentsNamesByBatch)
admStudentFetch.get('/students-by-branch',fetchStudentByBranch)

module.exports={admStudentFetch}