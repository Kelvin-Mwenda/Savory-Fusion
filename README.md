# 🍽️ Recipe App  

## 📌 Project Overview  
The **Recipe App** is a **full-stack web application** that allows users to browse, create, edit, and delete recipes. It features **user authentication, a responsive UI, and state management** for a seamless experience. The project is built using **React.js (Frontend) and Node.js/Express with MongoDB (Backend).**  

---

## 🛠️ Tech Stack  

| Technology       | Usage                        |
|-----------------|-----------------------------|
| **Frontend**    | React, Vite, Redux, Tailwind CSS, Axios |
| **Backend**     | Node.js, Express.js, MongoDB, Mongoose |
| **Authentication** | JWT (JSON Web Token), bcrypt.js |
| **Deployment**  | Vercel (Frontend), Render/Heroku (Backend) |
| **Development Tools** | Nodemon, Postman, Git |

---

## 📂 Project Structure  

### **1️⃣ Backend (Node.js + Express)**
The backend is responsible for handling **API requests, authentication, database interactions, and business logic.**  

#### **Folder Structure:**
- `config/` → Database configuration  
- `controllers/` → API logic for handling requests  
- `middleware/` → Authentication middleware  
- `models/` → Mongoose schemas for database  
- `routes/` → API endpoints for recipes and users  
- `server.js` → Backend entry point  

---

### **2️⃣ Frontend (React + Redux)**
The frontend provides an **interactive UI** where users can view, create, and manage recipes.  

#### **Folder Structure:**
- `api/` → Handles API requests using Axios  
- `components/` → Reusable UI components  
- `pages/` → Pages (Home, Recipe Details, Login, etc.)  
- `hooks/` → Custom React hooks  
- `redux/` → State management using Redux  
- `styles/` → Tailwind CSS global styles  

---

## 🚀 Installation & Setup  

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/Kelvin-Mwenda/Savory-Fusion.git
cd recipe-app
