# 🌐 Me-API Playground — Full Stack Profile System

A production-minded full-stack application that stores and exposes a developer profile using a REST API and a minimal React frontend. This project demonstrates backend fundamentals, API design, database modeling, query filtering, search functionality, and frontend integration.

---

## 📖 Project Description

**Me-API Playground** is a personal profile management system built to simulate how real SaaS profile/resume systems work. It allows storing structured candidate data in a database and retrieving it through REST APIs that power a frontend UI.

The project emphasizes:

- Clean backend architecture  
- Database schema modeling  
- Query filtering & search  
- Health monitoring  
- Frontend–backend integration  
- Deployment readiness  

---

## ✨ Features

- Create, read, and update profile data  
- List projects and filter by skill  
- Search projects and skills  
- View top skills  
- API health monitoring endpoint  
- React frontend connected to backend APIs  
- MongoDB schema with validation  

---

## 🛠 Tech Stack

### **Frontend**
- React.js  
- React Router DOM  
- Axios  

### **Backend**
- Node.js  
- Express.js  
- Mongoose  
- CORS  
- dotenv  

### **Database**
- MongoDB (Atlas)

### **Other Tools**
- Git  
- Postman (API testing)  

---

## 🧠 Project Architecture Overview

```
React Frontend
      │
      ▼
Express REST API (Node.js)
      │
      ▼
MongoDB Database
```

---

## 📂 Folder Structure

```
ME-API-PLAYGROUND/
│
├── client/
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.js
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   │   
│   │   ├── pages/
│   │   │   ├──HealthBridge.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Search.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   └── profileController.js
│   │   ├── middlewares/
│   │   ├── models/
│   │   │   └── Profile.js
│   │   ├── routes/
│   │   │   └── profileRoutes.js
│   │   └── index.js
│   └── package.json
└── README.md
```

---

## 🔐 Environment Variables (.env Example)

### Backend `.env`
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string

```

### Frontend `.env` (Optional)
```env
VITE_API_URL=http://localhost:5000/api
```

---

## ⚙️ Installation & Setup

### Prerequisites

- Node.js (v18+ recommended)  
- npm  
- MongoDB Atlas account 

---

### Backend Setup

```bash
cd server
npm install
```

Create `.env` file and add environment variables.

---

### Frontend Setup

```bash
cd client
npm install
```

---

## ▶ Running the Project

### Start Backend
```bash
cd server
npm run dev
```

### Start Frontend
```bash
cd client
npm run dev
```

Frontend runs on:
```
http://localhost:5173
```

Backend runs on:
```
http://localhost:5000
```

---

## 📡 API Documentation

[Postman Link](https://bhargavyadav-8218209.postman.co/workspace/Bhargav-Yadav's-Workspace~c5ed4879-e0c4-46af-88ff-a396c9f8c52a/collection/43584122-29d6c169-55a3-4b06-a578-da53e1e17e9d?action=share&source=copy-link&creator=43584122)

| Endpoint | Method | Description |
|---------|--------|-------------|
| `/api/health` | GET | Health check |
| `/api/profile` | POST | Create profile |
| `/api/profile` | GET | Fetch profile |
| `/api/profile` | PUT | Update profile |
| `/api/profile/projects?skill=` | GET | Filter projects by skill |
| `/api/profile/skills/top` | GET | Get skills list |
| `/api/profile/search?q=` | GET | Search projects & skills |

---

## 📜 Scripts / Commands

### Backend
```bash
npm run dev   # Run with nodemon
npm start     # Production start
```

### Frontend
```bash
npm run dev     # Development server
npm run build   # Production build
npm run preview # Preview build
```

---

## ⚠ Common Issues & Troubleshooting

**1. API not reachable**
- Ensure backend server is running.  
- Check `VITE_API_URL` value.

**2. MongoDB connection fails**
- Verify `MONGO_URI` in `.env`.

**3. CORS errors**
- Confirm backend uses `app.use(cors())`.

---

## 🚀 Future Improvements

- Authentication (JWT)  
- Pagination  
- Full-text search  
- Rate limiting  
- Unit tests  
- Swagger documentation  
- Caching layer  

---

## 🧑‍💻 Author

**Bhargav Yadav**  🌐 [GitHub](https://github.com/Bhargav-cod-kr) [LinkedIn](http://linkedin.com/in/bhargav-yadav-712089228)