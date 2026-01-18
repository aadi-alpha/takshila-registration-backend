const mongoose = require("mongoose");

const feesSchema = new mongoose.Schema(
    {
        // ================= STUDENT INFO =================
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
            required: true,
        },

        studentName: {
            type: String,
            required: true,
            trim: true,
        },

        studentRollNo: {
            type: String,
            required: true,
        },

        // ================= BRANCH =================
        branchId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Branch",
            required: true,
        },

        // ================= FEES DETAILS =================
        month: {
            type: String,
            required: true,
            lowercase: true, // january, february
        },

        year: {
            type: Number,
            required: true,
        },

        totalFees: {
            type: Number,
            required: true,
            min: 0,
        },

        paidAmount: {
            type: Number,
            default: 0,
            min: 0,
        },
        year: {
            type: Number
        },

        dueAmount: {
            type: Number,
            default: function () {
                return this.totalFees - this.paidAmount;
            }
        }
    },
    { timestamps: true }
);

const FeesModel = mongoose.model("FeesTakshilaStudents", feesSchema);
module.exports = {FeesModel}
