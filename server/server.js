import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import goodsRoutes from './routes/goods.js';
import vehicleRoutes from './routes/vehicles.js';
import snapshotRoutes from './routes/snapshots.js';
import analyticsRoutes from './routes/analytics.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/goods', goodsRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/snapshots', snapshotRoutes);
app.use('/api/analytics', analyticsRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
})
.catch(err => console.error('MongoDB connection failed:', err));
