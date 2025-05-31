# Role-Based-Authentications
#🚀 Features
✅ User Registration & Login with hashed passwords using bcrypt
✅ JWT Token Generation for secure session management
✅ Role-Based Access Control (RBAC) — restrict routes based on user roles (e.g., admin, user)
✅ Protected Routes using middleware to validate JWT and authorize roles
✅ MongoDB Database integration using MongoDB Compass

#🔧 Tech Stack
Backend: Node.js, Express.js
Database: MongoDB (Compass)
Authentication: JSON Web Tokens (JWT)
Password Hashing: bcryptjs

#Routes :
Register route :http://localhost:5000/api/auth/register
Login routes   :http://localhost:5000/api/auth/login
role-based authorization routes : http://localhost:5000/api/users/{admin,manager,user}
