import { useEffect, useState } from "react"
import axios from "axios"

const generateRandomGoodName = () => {
  const goodsList = ["Steel", "Wood", "Electronics", "Furniture", "Food"]
  return goodsList[Math.floor(Math.random() * goodsList.length)]
}

const GoodsCounter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const quantity = Math.floor(Math.random() * 5) + 1 // 1–5 units
      const newCount = count + quantity
      setCount(newCount)

      // Send POST to backend
      axios
        .post("https://warehouse-dashboard.onrender.com/api/goods", {
          name: generateRandomGoodName(),
          quantity: quantity,
        })
        .then(() => {
          console.log("Goods data sent")
        })
        .catch((err) => {
          console.error("Error sending goods data:", err.message)
        })
    }, 2000) // every 2 seconds

    return () => clearInterval(interval)
  }, [count])

  return (
    <div className="rounded shadow-lg p-4 bg-white">
      <h2 className="text-xl font-semibold font-serif mb-2">Goods Transported</h2>
      <div className="text-2xl font-bold text-green-600">{count}</div>
    </div>
  )
}

export default GoodsCounter
