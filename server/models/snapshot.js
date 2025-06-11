import mongoose from 'mongoose';

const snapshotSchema = new mongoose.Schema({
  imageUrl: String,
  time: { type: Date, default: Date.now },
  note: String
});

export default mongoose.model('Snapshot', snapshotSchema);
