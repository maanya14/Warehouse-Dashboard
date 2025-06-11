import mongoose from 'mongoose';

const goodsSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model('Goods', goodsSchema);
