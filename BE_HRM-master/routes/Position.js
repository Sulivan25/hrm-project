import express from 'express';
import {
    createPosition,
    updatePosition,
    deletePosition,
    getPosition,
    getAllPosition
} from '../controllers/Position.js'

const router = express.Router();

router.post('/', createPosition);

router.put('/:id', updatePosition);

router.delete('/:id', deletePosition);

router.get('/:id', getPosition);

router.get('/', getAllPosition);

export default router;