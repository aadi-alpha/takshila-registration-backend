const { RegistrationStudentModel } = require("../models/studentRegisterModel")

const findStudentsBatch = async (req, res) => {

    try {
        const batch = req.query.batch
        if (!batch) {
            return res.status(400).send({
                status: 0,
                message: "Please give batch details"
            })
        }
        if (batch == 'all') {
            let AllStudents = await RegistrationStudentModel.find()
            if (AllStudents) {
                res.status(200).send({
                    status: 1,
                    message: "students fetched",
                    Students: AllStudents
                })

            } else {
                res.status(400).send({
                    status: 0,
                    message: "No students exists"

                })
            }
        } else {
            let BatchWiseStudents = await RegistrationStudentModel.find({

                batchDetails: { $regex: batch, $options: "i" }
            }).select("createdAt st_firstName st_lastName st_whatsappNo batchDetails st_class st_payment_status")
            if (BatchWiseStudents.length>0) {
                res.status(200).send({
                    status: 1,
                    studentsLength:BatchWiseStudents.length,
                    message: "students fetched",
                    Students: BatchWiseStudents
                })

            } else {
                res.status(200).send({
                    status: 0,
                    studentsLength:BatchWiseStudents.length,
                    message: "No students exists"

                })
            }
        }

    } catch (error) {
        res.status(400).send({
            message: "Can not fetch students",
            error,

        })
    }

}
module.exports = { findStudentsBatch }