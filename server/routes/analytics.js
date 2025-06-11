import express from 'express';
import Goods from '../models/goods.js';
import Vehicle from '../models/vehicle.js';

const router = express.Router();


router.get('/', async (req, res) => {
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);

  const goods = await Goods.aggregate([
    { $match: { timestamp: { $gte: startOfDay } } },
    {
      $group: {
        _id: { $hour: '$timestamp' },
        count: { $sum: '$quantity' }
      }
    }
  ]);

  const vehicles = await Vehicle.aggregate([
    { $match: { detectedAt: { $gte: startOfDay } } },
    {
      $group: {
        _id: { $hour: '$detectedAt' },
        count: { $sum: 1 }
      }
    }
  ]);

  res.json({ goodsPerHour: goods, vehiclesPerHour: vehicles });
});

export default router;
