import { useEffect, useRef } from "react"

const VideoFeed = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    const getCameraStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true })
        if (videoRef.current) {
          videoRef.current.srcObject = stream
        }
      } catch (err) {
        console.error("Error accessing webcam:", err)
      }
    }

    getCameraStream()
    const videoElement = videoRef.current

    return () => {
      if (videoElement && videoElement.srcObject) {
        const tracks = videoElement.srcObject.getTracks()
        tracks.forEach((track) => track.stop())
      }
    }
  }, [])

  return (
    <div className="rounded shadow-lg p-4 bg-white">
      <h2 className="text-xl font-semibold font-serif mb-2">Live Webcam Feed</h2>
      <video ref={videoRef} autoPlay playsInline className="w-full h-[300px] object-cover rounded" />
    </div>
  )
}

export default VideoFeed
