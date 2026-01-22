const TestModel = require("../models/TestSchema")
const mongoose = require("mongoose");


const testInsert = async (req, res) => {


    try {
        const payload = req.body;

        let testRes = await TestModel.create(payload)

        if (testRes) {
            res.status(200).send({
                status: 1,
                message: "test successfully inserted",
                testRes
            })
        } else {
            res.status(409).send({
                status: 0,
                message: "Please fill required fields"
            })
        }

    } catch (error) {

        res.status(400).send({
            status: 0,
            message: "can not insert data at the moment"
        })
    }
}
const getTestsRecordForDropDown = async (req, res) => {
    try {
        let { batchId } = req.query
           const branchId = req.user.branchId
        if (!batchId || !branchId) {
            return res.status(400).send({
                status: 0,
                message: "BranchId and BatchId are required fields"

            })
        }
        let TestSubjectsDetails = await TestModel.find({
            batchId, branchId
        }).select("subject chapterName testDate")
        if (!TestSubjectsDetails) {
            return res.status(404).send({
                status: 0,
                message: "No test Records exists"
            })
        }
        res.status(200).send({
            status: 1,
            message: "records exists",
            TestSubjectsDetails
        })
    } catch (error) {
        return res.status(500).send({
            status: 0,
            message: "can not fetch record"
        })
    }
}


const viewTests = async (req, res) => {
    try {
        const {  batchId, testId, studentId } = req.query;
           const branchId = req.user.branchId

        // Validate ObjectId
        if (!branchId || !batchId) {
            return res.status(400).json({
                message: "branchId and batchId are required",
            });
        }

        if (testId && !mongoose.Types.ObjectId.isValid(testId)) {
            return res.status(400).json({
                message: "Invalid testId",
            });
        }

        // ==========================
        // STUDENT-WISE VIEW
        // ==========================
        if (studentId) {
            let query = {
                branchId,
                batchId,
            };

            // Optional testId for student
            if (testId) {
                query._id = testId;
            }

            const tests = await TestModel.find(query).sort({ testDate: -1 });

            const studentTests = tests
                .map((test) => {
                    const studentMark = test.marks.find(
                        (m) => m.userId.toString() === studentId
                    );

                    if (!studentMark) return null;
                 
                    return {
                        testId: test._id,
                        rollNo:studentMark.userId,
                        subject: test.subject,
                        chapterName: test.chapterName,
                        testDate: test.testDate,
                        studentName: studentMark.userName,
                        fatherName: studentMark.userF_name,
                        maxMarks: test.maxMarks,
                        obtainedMarks: studentMark.obtainedMarks,
                    };
                })
                .filter(Boolean);

            return res.status(200).json({
                success: true,
                type: "STUDENT_VIEW",
                count: studentTests.length,
                data: studentTests,
            });
        }

        // ==========================
        // ADMIN / TEACHER VIEW
        // ==========================
        if (!testId) {
            return res.status(400).json({
                message: "testId is required for admin/teacher view",
            });
        }

        const test = await TestModel.findOne({
            branchId,
            batchId,
            _id: testId,
        });

        if (!test) {
            return res.status(404).json({
                message: "Test not found",
            });
        }

        return res.status(200).json({
            success: true,
            type: "ADMIN_TEACHER_VIEW",
            data: test,
        });

    } catch (error) {
        
        res.status(500).json({
            message: "Server error while fetching tests",
        });
    }
};

module.exports = { testInsert, getTestsRecordForDropDown, viewTests }