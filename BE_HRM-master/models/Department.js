import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Department Schema
const DepartmentSchema = new Schema({
    department_name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    manager: {
        manager_id: {
            type: Schema.Types.ObjectId, 
            ref: 'Employee'
        },
        full_name: String,
        email: String,
        phone_number: String
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

// Tạo model cho Department
const Department = mongoose.model('Department', DepartmentSchema);

export default Department;
