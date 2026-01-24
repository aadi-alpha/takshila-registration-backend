const { BatchModel } = require("../models/BatchModel")

let CreateBatch = async (req, res) => {
    try {
        let { name } = req.body
        let BatchCreation = await BatchModel.create({
            name
        })
        if (BatchCreation) {
            return res.status(200).send({
                status: 1,
                message: "batch successfully created",
                BatchData: BatchCreation
            })

        } else {
            return res.status(400).send({
                status: 0,
                message: "can not create batch"
            })
        }

    } catch (error) {
        res.status(500).send({
            status: 0,
            message: "can not create batch",
            error
        })
    }
}

let BatchFetch = async (req, res) => {
    try {
        let AllBatches = await BatchModel.find()
        
        if (AllBatches.length === 0) {
            return res.status(404).send({
                status: 0,
                message: "no batches exists"
            })
        }
        res.status(200).send({
            status: 1,
            message: "batches found",
            AllBatches
        })
    } catch (error) {
        res.status(400).send({
            status: 0,
            message: "error in finding batches",
            error
        })
    }
}
module.exports = { CreateBatch, BatchFetch }