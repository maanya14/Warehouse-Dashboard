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
  <div ref={captureRef} >
    <h6 className="font-serif text-2xl mb-4 font-semibold m-8">Warehouse Dashboard</h6>
    <div className="p-4 bg-gray-100 grid grid-cols-2 gap-4 w-screen">
      <VideoFeed />
      <AnalyticsCharts />
      <GoodsCounter />
      <NumberPlateDetector />
    </div>
  </div>
);

};

export default App;