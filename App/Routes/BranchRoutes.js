const express =require('express')
const { BranchCreation, AllBranchesGet, GetBranchById, UpdateBranchById } = require('../Controllers/BranchController')
const authMiddlewares = require('../middlewares/authMiddleware')

const BranchDetailsFetch = express.Router()
BranchDetailsFetch.get('/branch-fetch', AllBranchesGet)

BranchDetailsFetch.use(authMiddlewares)
BranchDetailsFetch.post('/branch-insert', BranchCreation)
BranchDetailsFetch.put('/update-branch/:id',UpdateBranchById)
BranchDetailsFetch.get('/branch-get-ById/:id',GetBranchById)


module.exports={BranchDetailsFetch}