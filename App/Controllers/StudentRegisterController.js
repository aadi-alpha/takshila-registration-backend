const upload = require("../../multer")
let { RegistrationStudentModel } = require("../models/studentRegisterModel")
let insertImage = async (req, res) => {
  try {
    res.json({
      imageUrl: req.file.path
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

}
let insertStudents = async (req, res) => {
  let studentDet = req.body;


  try {
    const existingStudent = await RegistrationStudentModel.findOne({
      st_aadharNo: studentDet.st_aadharNo
    });
    if (existingStudent) {
      res.status(200).send({

        message: "This aadhar number already exists",
      })
      return
    }
    let registeredData = await RegistrationStudentModel.create(studentDet)
    res.status(200).send({
      registeredData,
      message: "Student successfully inserted",
    })
  } catch (error) {
    res.status(400).send("failed in entering students", error)
  }
}

module.exports = { insertStudents, insertImage }