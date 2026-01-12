
const { adminModel } = require('../models/adminRegisterModel')
const bcrypt = require("bcryptjs");
const adminRegister = async (req, res) => {

    try {
        let { name, mobile, password, branch } = req.body
        const hashedPassword = await bcrypt.hash(password, 10);
        let isExist = await adminModel.find({ mobile })
        if (isExist.length > 0) {
            res.status(200).send({
                message: "Admin Already Exists",
                status: 1,
            })
            return
        }
        let adminRes = await adminModel.create({
            name,
            mobile,
            password: hashedPassword,
            branch
        })
        res.status(200).send({
            message: "successfully registred",
            status: 1,
        })
    } catch (error) {
        res.status(400).send({
            message: "cannot insert data",
            status: 0,
            data: error
        })
    }

}
const adminLogin = async (req, res) => {
    try {
        const { mobile, password } = req.body;
        const loginRes = await adminModel.findOne({ mobile })
        if (!loginRes) {
            return res.status(400).send({
                status: 0,
                isFound: 'false',
                message: 'User does not exists..',
                data: loginRes
            })
        }
        const passRes = await bcrypt.compare(password, loginRes.password)

        if (!passRes) {
            return res.status(400).send({
                status: 0,
                isFound: 'false',
                message: 'Incorrect Password..',

            })
        }

        return res.status(200).send({
            status: 1,
            message: "Admin Found..",
            data: loginRes
        })



    } catch (error) {
        res.status(400).send({
            status: 0,
            isFound: 'false',
            data: error
        })
    }
}
let adminFetch = async (req, res) => {
    try {
        const { id } = req.params

        let admin = await adminModel.findOne({ _id: id }).select("name")
        if (admin) {
            res.status(200).send({
                status: 1,
                admin,
                message: "admin exists"
            })
        }
    } catch (error) {

        res.status(400).send({
            status: 0,
            error,
            message: "admin not  exists"
        })
    }
}
let adminFetchAll = async (req, res) => {
    try {
        let admin = await adminModel.find().select("name mobile branch")
        if (admin) {
            res.status(200).send({
                status: 1,
                admin,
                message: "admin exists"
            })
        }
    } catch (error) {
        res.status(400).send({
            status: 0,
            error,
            message: "No admin found"
        })
    }
}
module.exports = { adminRegister, adminLogin, adminFetch, adminFetchAll }