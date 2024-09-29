import express from 'express';
import {
    createPayroll,
    updatePayroll,
    deletePayroll,
    getAllPayroll,
    getPayroll,
    getPayrollByIdUser
} from "../controllers/Payroll.js";

const router = express.Router();

router.post('/', createPayroll);

router.put('/:id', updatePayroll);

router.delete('/:id', deletePayroll);

router.get('/', getAllPayroll);

router.get('/employee/:id', getPayrollByIdUser);

router.get('/:id', getPayroll);

export default router;