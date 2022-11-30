const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    regId: Number,
    name: String,
    department: String,
    Email: String,
    mobile: String,
    Address: String,

    section: {
        type: String,
        default: "A"
    },
});

const studentModel = mongoose.model("student", studentSchema);

module.exports = studentModel;

