import { useEffect, useState } from "react"
import axios from "axios"

const generateRandomPlate = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return (
    chars[Math.floor(Math.random() * 26)] +
    chars[Math.floor(Math.random() * 26)] +
    ("" + Math.floor(1000 + Math.random() * 9000))
  )
}

const NumberPlateDetector = () => {
  const [plate, setPlate] = useState(generateRandomPlate())

  useEffect(() => {
    const interval = setInterval(() => {
      const newPlate = generateRandomPlate()
      setPlate(newPlate)

      // Send POST request to backend
      axios
        .post("https://warehouse-dashboard.onrender.com/api/vehicles", {
          plateNumber: newPlate,
        })
        .then(() => {
          console.log(`Plate sent: ${newPlate}`)
        })
        .catch((err) => {
          console.error("Error sending plate:", err.message)
        })
    }, 3000) // every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="rounded shadow-lg p-4 bg-white">
      <h2 className="text-xl font-semibold font-serif mb-2">Detected Number Plate</h2>
      <div className="text-2xl font-bold text-blue-600">{plate}</div>
    </div>
  )
}

export default NumberPlateDetector
