# 💼 Full-Stack Job Portal

A fully-featured **MERN-based Job Portal** application that connects job seekers with recruiters through a modern, scalable, and responsive web interface.

---

## 🚀 Overview

This project is a full-stack job portal built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It provides separate modules for **job seekers** and **recruiters**, enabling seamless job posting, searching, and application management.

---

## 🧩 Features

🔐 **JWT-based Authentication**  
👤 Role-based access for Job Seekers & Recruiters  
📄 Resume Upload & Application Tracking  
📢 Recruiters can Post, Edit, and Delete Jobs  
🔍 Advanced Search with Filters (title, location, skills, etc.)  
📬 **Cron-based Job Alert Emails** using Nodemailer  
🌐 Fully Responsive UI built with React.js  
🧑‍💼 Dashboard for Recruiters to manage applicants  
📊 User-friendly Job Listings with Pagination  

---

## 🛠️ Tech Stack

### Frontend:
- ⚛️ React.js
- 📦 Axios (API Calls)
- 💅 CSS / Tailwind (optional)

### Backend:
- 🧠 Node.js
- 🛤️ Express.js
- 🛢️ MongoDB (Mongoose ODM)
- 🔐 JSON Web Tokens (JWT)
- 📩 Nodemailer (Email Notifications)
- ⏰ Node-cron (for Scheduled Tasks)
- 📁 Multer (Resume Uploads)

---

## 🗂️ Project Structure

```plaintext
job-portal/
├── client/               # React Frontend
│   ├── src/
│   └── ...
├── server/               # Node.js + Express Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── ...
└── README.md
```

### 📦 Installation & Setup
1. Clone the Repository
```bash
git clone https://github.com/Kashishgarg-15/JOB-PORTAL.git
cd job-portal
```

2. Setup Backend
```bash
cd backend
npm install
# Create .env file with required MongoDB and JWT secrets
npm run dev
```

3. Setup Frontend
```bash
cd frontend
npm install
npm start
```
The React app runs on http://localhost:3000
The Node/Express API runs on http://localhost:5000

### 📬 Job Alert System
A cron job runs periodically and sends personalized job alerts to users based on:
Saved preferences,
Recently posted jobs,
Keyword matches,
Implemented using node-cron + nodemailer.

### 📄 License
This project is licensed under the MIT License.


