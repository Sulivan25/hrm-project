import Department from '../models/Department.js';
import Employee from '../models/Employee.js';

export const createDepartment= async (req, res, next) => {
    try{
        const manager = await Employee.findById(manager_id)
        if (!manager) {
            return res.status(404).json({ message: 'Manager not found' });
        }
        const newDepartment = new Department({
            department_name,
            description,
            manager: { manager_id: manager._id }
        });
        const saveDepartment = await newDepartment.save();
        res.status(200).json(saveDepartment);
    }
    catch(err){
        next(err);
    }
}

export const updateDepartment= async (req, res, next) => {
    try{
        const upodateDepartment = await Department.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true }
        )
        res.status(200).json("Cập nhật thành công");
    }
    catch(err){
        next(err) ;
    }
}

export const deleteDepartment = async (req, res, next) => {
    try{
         await Department.findByIdAndDelete(
            req.params.id
        )
        const message = "Xoá thành công"
        res.status(200).json(message);
    }
    catch{
        next(err);
    }
}

export const getAllDepartment= async (req, res, next) => {
    try{
        const findDepartments = await Department.find().populate('manager.manager_id', 'full_name email phone_number');
        res.status(200).json(findDepartments);
    }
    catch(err) {
        next(err);
    }
}

export const getDepartment = async (req, res, next) => {
    try{
        const findDepartment = await Department.findById(
            req.params.id
        ).populate('manager.manager_id', 'full_name email phone_number')
        res.status(200).json(findDepartment);
    }
    catch(err){
        next(err);
    }
}