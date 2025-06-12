# 📦 Warehouse Monitoring Dashboard

A full-stack dashboard prototype for warehouse automation — simulates live video, mock AI detection, analytics, and REST APIs.
> Built as part of a Full Stack Internship selection task (3-day challenge).

---

## 🚀 Features

- 📷 **Live Webcam Feed** using `getUserMedia`
- 🚗 **Mock Number Plate Detection** (randomly generated every few seconds)
- 📦 **Simulated Goods Counter** (increases periodically)
- 📊 **Analytics Dashboard**:
  - Goods transported per hour
  - Vehicles detected per hour
  - Auto-updating line charts
- 🔁 **Auto-refresh analytics** every 10 seconds
- 🔌 **RESTful API** (CRUD for goods, vehicles, snapshots)
- 💾 **MongoDB Atlas integration** for cloud database
- 🌐 **Frontend hosted on Netlify**, **backend on Render**

---

## 🧱 Tech Stack

### Frontend:
- React.js (Vite)
- Tailwind CSS
- Axios
- Recharts

### Backend:
- Node.js + Express
- MongoDB Atlas + Mongoose
- Dotenv
- CORS
- Nodemon (for local development)

---

## 🛠 Setup Instructions

### 📁 Clone the Repo

```bash
git clone https://github.com/your-username/warehouse-dashboard.git
cd warehouse-dashboard
