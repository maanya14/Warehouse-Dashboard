import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
  plateNumber: String,
  detectedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Vehicle', vehicleSchema);
