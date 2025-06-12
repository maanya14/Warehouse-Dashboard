import React, { useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import axios from 'axios';
import VideoFeed from './components/VideoFeed';
import NumberPlateDetector from './components/NumberPlateDetector';
import GoodsCounter from './components/GoodsCounter';
import AnalyticsCharts from './components/AnalyticsCharts';


const App = () => {
  const captureRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      if (captureRef.current) {
        html2canvas(captureRef.current).then(canvas => {
          const imgData = canvas.toDataURL('image/png');

          axios.post('http://localhost:5000/api/snapshots', {
            imageUrl: imgData,
            note: 'Automated snapshot' // Optional custom note
          })
          .then(() => {
            console.log("Snapshot sent to backend.");
          })
          .catch(err => {
            console.error("Error uploading snapshot:", err.message);
          });
        });
      }
    }, 10000); // every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={captureRef} className="p-4 space-y-4 bg-gray-100">
      <VideoFeed />
      <GoodsCounter />
      <NumberPlateDetector />
      <AnalyticsCharts />
    </div>
  );
};

export default App;