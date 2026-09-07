# TaskFlow Portal

A full‑stack job/task management portal built using the MERN stack (MongoDB, Express, React, Node.js).  
Includes secure JWT authentication, REST APIs, and a responsive UI for managing tasks efficiently.

---

## 🚀 Features

- User registration & login (JWT authentication)
- Create, update, and view tasks
- User‑specific task filtering
- REST API backend (Node.js + Express)
- Responsive React frontend
- MongoDB database (Mongoose)
- Axios API client
- Modular, scalable folder structure

---

## 🧱 Tech Stack

### **Frontend**
- React
- Axios
- React Hooks
- CSS / Tailwind (optional)

### **Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Bcrypt password hashing
- CORS

---

## 📁 Project Structure

TaskFlow-Portal/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── taskController.js
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   └── middleware/
│       └── authMiddleware.js
│
└── frontend/
├── package.json
├── src/
│   ├── App.js
│   ├── api/
│   │   └── axios.js
│   ├── components/
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── Dashboard.js
│   │   └── TaskList.js
│   └── pages/
│       └── Home.js


---

## 🔌 API Endpoints

### **Auth Routes**
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | Login user |

### **Task Routes**
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/tasks | Create a new task |
| GET | /api/tasks | Get all tasks for logged‑in user |

---

## 🔐 Authentication Flow

1. User registers or logs in  
2. Backend returns a JWT token  
3. Frontend stores token (localStorage)  
4. All protected routes require `Authorization: Bearer <token>`  
5. Middleware validates token and attaches user info  

---

## 📌 Future Enhancements

- Admin dashboard
- Task categories & priority levels
- File uploads
- Email notifications
- Dark mode UI
- Deployment (Render + Vercel)

---

## 📄 License

This project is open‑source and available under the MIT License.

