import mongoose from 'mongoose'
const Schema = mongoose.Schema;

// Employee Schema
const EmployeeSchema = new Schema({
    full_name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    birth_date: {
        type: Date,
    },
    gender: {
        type: String,
        enum: ['Nam', 'Nữ'],
    },
    id_number: {
        type: String,
        unique: true,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    phone_number: {
        type: String,
        trim: true
    },
    position:{
        position_id: { 
            type: Schema.Types.ObjectId, 
            ref: 'Position',
        },
        name: String,
        description: String
    },
    start_date: {
        type: Date,
    },
    department: {
        department_id: {
            type: Schema.Types.ObjectId,
            ref: 'Department'
        },
        department_name: String,
        description: String
    },
    profileImage: {
         type: String 
    },
    salary: {
        type: Number,
    },
    employment_status: {
        type: String,
        enum: ['Đang làm', 'Đã nghỉ việc'],
        default: 'Đang làm'
    },
    notes: {
        type: String,
        trim: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

//model cho Employee
const Employee = mongoose.model('Employee', EmployeeSchema);

export default Employee;
