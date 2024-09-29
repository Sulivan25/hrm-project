import mongoose from "mongoose";

const Schema = mongoose.Schema;

const LeaveReqSchema = new Schema({
    employee: {
        employee_id: {
            type: Schema.Types.ObjectId, 
            ref: 'Employee'
        },
        full_name: String,
        email: String,
        phone_number: String
    },
    startDate: { 
        type: Date, 
        required: true 
    },
    endDate: { 
        type: Date, 
        required: true 
    },
    reason: { 
        type: String, 
        required: true 
    },
    status: { 
        type: String, 
        enum: ['pending', 'approved', 'rejected'], 
        default: 'pending' 
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const LeaveReq = mongoose.model('LeaveReq', LeaveReqSchema);

export default LeaveReq;