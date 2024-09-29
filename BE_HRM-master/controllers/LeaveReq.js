import LeaveReq from "../models/LeaveReq.js";

export const createLeaveReq = async (req, res, next) => {
    const leavereq = new LeaveReq(req.body);
    try{
        await leavereq.save();
        res.status(200).send("Tạo đơn yêu cầu nghĩ việc thành công");
    }
    catch(err){
        next(err);
    }
}

export const updateLeaveReq = async (req, res, next) => {
    try{
        await LeaveReq.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        )
        res.status(200).send("Cập nhật thành công");
    }
    catch(err){
        next(err);
    }
}

export const deleteLeaveReq = async (req, res, next) => {
    try{
        await LeaveReq.findByIdAndDelete(req.params.id);
        res.status(200).send("Đơn xin nghỉ đã được xóa");
    }
    catch(err){
        next(err);
    }
}

export const getById = async (req, res, next) => {
    try{
        const leavereq = await LeaveReq.findById(req.params.id).populate('employee.employee_id','full_name email phone_number');
        res.status(200).json(leavereq);
    }
    catch(err){
        next(err);
    }
}

export const getByIdEmployee = async (req, res, next) => {
    try{
        const leavereq = await LeaveReq.find({employee_id: req.params.id}).populate('employee.employee_id','full_name email phone_number');
        res.status(200).json(leavereq);
    }
    catch(err){
        next(err)
    }
}