import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Tạo schema cho Counter
const CounterSchema = new Schema({
  name: { type: String, unique: true },
  value: { type: Number, default: 0 },
});

// Tạo model cho Counter
const Counter = mongoose.model('Counter', CounterSchema);

export default Counter;