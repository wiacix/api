const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    employeeId:{
        type:String,
        required:true,
        unigue:true,
    },
    employeeName:{
        type:String,
        required:true,
    },
    designation:{
        type:String,
        required:true,
    },
    joiningDate:{
        type:String,
        required:true,
    },
    dateOfBirth:{
        type:String,
        required:true,
    },
    salary:{
        type:Number,
        required:true,
    },
    activeEmployee:{
        type:Boolean,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    createAt:{
        type:Date,
        default:Date.now
    }
});

const Employee = mongoose.model("Employee",employeeSchema);

module.exports = Employee;