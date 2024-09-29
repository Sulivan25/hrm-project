import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const PositionSchema = new Schema({
    name : {
        type: String,
        trim: true,
        required: true
    },
    description : {
        type: String,
        trim: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

//model cho Position
const Position = mongoose.model('Position', PositionSchema);

export default Position ;