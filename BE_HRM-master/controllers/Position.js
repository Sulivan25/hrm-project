import Position from "../models/Position.js";

export const createPosition = async (req, res, next) => {
    const newPosition = new Position(req.body);
    try{
        await newPosition.save();
        res.status(201).json("Bạn vừa thêm 1 chức vụ mới");
    }
    catch(err){
        next(err)
    }
}

export const updatePosition = async (req, res, next) => {
    try{
        await Position.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        )
        res.status(200).send("Cập nhật thành công");
    }
    catch(err){
        next(err)
    }
}

export const deletePosition = async (req, res, next) => {
    try{
        await Position.findByIdAndDelete(req.params.id);
        res.status(200).send("Xóa thành công");
    }
    catch(err){
        next(err);
    }
}

export const getAllPosition = async (req, res, next) => {
    try{
        const positions = await Position.find();
        res.status(200).json(positions);
    }
    catch(err){
        next(err);
    }
}

export const getPosition = async (req, res, next) => {
    try{
        const position = await Position.findById(req.params.id);
        res.status(200).json(position);
    }
    catch(err){
        next(err);
    }
}