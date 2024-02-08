import mongoose, { Schema } from "mongoose";

const StatusSchema = new Schema({
    status: {
        type: Boolean,
        required: true
    },
   
})

export const Status =
    mongoose.models.Status || mongoose.model('Status', StatusSchema)