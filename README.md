CRUD Job Tracker 🧾

A full-stack Job Application Tracker built with React, Node.js, Express, and MongoDB.
This project demonstrates a complete CRUD workflow with modern UI, filtering, and production deployment.

🌐 Live Demo

🔗 Frontend (Vercel):
https://crud-starter-react-frontend-git-main-taweep47s-projects.vercel.app/

🖥 Backend (Render):
Deployed as REST API service

🚀 Features

✅ Create, Edit, Delete job applications

🔍 Search by company or position

🏷 Filter by status (Applied, Interview, Offer, Rejected)

↕ Sort by Latest / Company A–Z / Z–A

🪟 Edit modal & Confirm delete modal

⏳ Loading skeleton UI

🎨 Color-coded status badges

🌐 Production deployment (Frontend + Backend separated)

🛠 Tech Stack
Frontend

React

Tailwind CSS

React Router

Heroicons

Backend

Node.js

Express

MongoDB (MongoDB Atlas)

REST API

Deployment

Vercel (Frontend)

Render (Backend)

🧠 Architecture

Frontend (React) communicates with a REST API hosted on Render.
The backend connects to MongoDB Atlas for persistent data storage.

React (Vercel)
      ↓
Express API (Render)
      ↓
MongoDB Atlas
⚙ Getting Started (Local Development)
1️⃣ Clone Repository
git clone https://github.com/taweep47/crud-starter-react-frontend.git
cd crud-starter-react-frontend
2️⃣ Install Dependencies

Frontend:

cd client
npm install

Backend:

cd ../server
npm install
3️⃣ Environment Variables

Create .env file inside server/:

PORT=5000
MONGO_URI=your_mongodb_connection_string
4️⃣ Run the App

Backend:

cd server
npm run dev

Frontend:

cd client
npm run dev
📌 Future Improvements

Authentication (JWT)

Pagination

Dark mode

Dashboard analytics

Role-based access

👤 Author

Taweep47

If you found this project helpful, feel free to fork or use it as a learning reference.
