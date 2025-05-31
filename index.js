require("dotenv").config();
const express = require("express");
const dbConnect = require('../src/config/dbConnection');
const authRoutes = require("../src/routes/authRoutes");
const userRoutes=require("../src/routes/userRoutes")
const app = express();

// ✅ Must be before routes
app.use(express.json());

// DB Connect
dbConnect();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users",userRoutes)
const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.send("<h1>Hello world!</h1>");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
