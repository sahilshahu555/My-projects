import mongoose, { Schema } from "mongoose";

const EmployeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

export const Employee =
    mongoose.models.Employee || mongoose.model('Employee', EmployeeSchema)