import express from "express";
import{
    createDepartment,
    updateDepartment,
    deleteDepartment,
    getAllDepartment,
    getDepartment
} from '../controllers/Department.js'

const router = express.Router();

//Create
router.post("/", createDepartment);
//Update
router.put('/:id', updateDepartment);
//Delete
router.delete('/:id', deleteDepartment);
//GetAll
router.get("/", getAllDepartment);
//Get
router.get("/:id", getDepartment);

export default router;