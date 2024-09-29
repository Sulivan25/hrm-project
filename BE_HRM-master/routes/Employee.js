import express from 'express';
import {
    updateInfor,
    deleteInfor,
    getAllInfor,
    getInfor,
    getInforByEmail
} from '../controllers/Employee.js';

const router = express.Router();

// Cập nhật thông tin người dùng theo ID
router.put('/:id', updateInfor);

// Xóa thông tin người dùng theo ID
router.delete('/:id', deleteInfor);

// Lấy tất cả thông tin người dùng
router.get('/', getAllInfor);

// Lấy thông tin người dùng theo ID
router.get('/id/:id', getInfor); // Sử dụng /id/:id để phân biệt

// Lấy thông tin người dùng theo email
router.get('/email/:email', getInforByEmail); // Sử dụng /email/:email để phân biệt

export default router;