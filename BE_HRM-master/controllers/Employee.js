import Employee from "../models/Employee.js";
import Department from '../models/Department.js';
import Position from '../models/Position.js';

export const updateInfor = async (req, res, next) => {
    try{
        await Employee.findByIdAndUpdate(
            req.params.id, 
            {$set: req.body}, 
            {new: true}
        );
        res.status(200).send("Cập nhật thành công");
    }
    catch(err){
        next(err);
    }
}

export const deleteInfor = async (req, res, next) => {
    try{
        await Employee.findByIdAndDelete(req.params.id);
        res.status(200).send("Tào khoản đã bị xóa");
    }
    catch(err){
        next(err);
    }
}

export const getAllInfor = async (req, res, next) => {
    try{

        const allInfor = await Employee.find().populate('position.position_id', 'name description')  
                                              .populate('department.department_id', 'department_name description');
        res.status(200).send(allInfor);
    }
    catch(err){
        next(err);
    }
}

export const getInfor = async (req, res, next) => {
    try{
        const infor = await Employee.findById(req.params.id).populate('position.position_id', 'name description')  
                                                            .populate('department.department_id', 'department_name description');
        res.status(200).send(infor);
    }
    catch(err){
        next(err);
    }
}

// Hàm lấy thông tin người dùng theo email
export const getInforByEmail = async (req, res, next) => {
    try {
        const { email } = req.params; // Lấy email từ tham số URL

        // Tìm người dùng theo email
        const user = await Employee.findOne({ email })
            .populate('position.position_id', 'name description')
            .populate('department.department_id', 'department_name description');

        if (!user) {
            return res.status(404).send({ message: 'Người dùng không tồn tại' });
        }

        // Trả về thông tin người dùng
        res.status(200).send(user);
    } catch (err) {
        next(err);
    }
};



