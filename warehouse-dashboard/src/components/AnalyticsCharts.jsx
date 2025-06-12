import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const AnalyticsCharts = () => {
  const [data, setData] = useState([]);

  const fetchAnalytics = async () => {
    try {
      const res = await axios.get('https://warehouse-dashboard.onrender.com/api/analytics');
      const goods = res.data.goodsPerHour || [];
      const vehicles = res.data.vehiclesPerHour || [];

      // Convert to consistent format for charting
      const merged = Array.from({ length: 24 }, (_, hour) => {
        const g = goods.find((d) => d._id === hour) || { count: 0 };
        const v = vehicles.find((d) => d._id === hour) || { count: 0 };
        return {
          hour: `${hour}:00`,
          goods: g.count,
          vehicles: v.count,
        };
      });

      setData(merged);
    } catch (err) {
      console.error('Failed to fetch analytics:', err);
    }
  };

  useEffect(() => {
    fetchAnalytics();
    const interval = setInterval(fetchAnalytics, 10000); // refresh every 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Hourly Analytics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hour" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="goods" stroke="#10B981" name="Goods/hour" />
          <Line type="monotone" dataKey="vehicles" stroke="#3B82F6" name="Vehicles/hour" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsCharts;
