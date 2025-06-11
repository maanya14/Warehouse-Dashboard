import React from 'react';
import VideoFeed from './components/VideoFeed';
import NumberPlateDetector from './components/NumberPlateDetector';
import GoodsCounter from './components/GoodsCounter';
import AnalyticsCharts from './components/AnalyticsCharts';

function App() {
  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <h1 className="text-3xl font-bold font-serif mb-6">Warehouse Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <VideoFeed />
        <NumberPlateDetector />
        <GoodsCounter />
        <AnalyticsCharts />
      </div>
    </div>
  );
}

export default App;
