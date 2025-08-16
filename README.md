# Workcity Chat Backend

This is the **Node.js + Express + MongoDB backend** for the Workcity Chat system.  
It provides authentication, conversations, messages, and real-time chat with **Socket.IO**.

---

## 🚀 Features
- JWT Authentication (Signup/Login)
- User roles: admin, agent, customer, designer, merchant
- CRUD for conversations & messages
- Real-time messaging with **Socket.IO**
- MongoDB database
- REST API for integration

---

## ⚙️ Requirements
- Node.js 18+
- MongoDB 5+

---

## 📂 Installation
1. Clone the repo:
   ```sh
   git clone https://github.com/judgevan/workcity-chat-backend
   cd workcity-chat-backend


2
Install dependencies:

npm install

3
Create .env file:

PORT=4000
MONGO_URI=mongodb://localhost:27017/workcity_chat
JWT_SECRET=your_secret_key

4
Run server:

npm run dev

5
API will run at:

http://localhost:4000/api


6
🛠️ Technologies

Node.js, Express

MongoDB, Mongoose

JWT (Authentication)

Socket.IO