const express = require("express");
const router = express.Router();
const verifyToken=require("../middleware/authMiddleware");
const authorizeRole=require("../middleware/roleMiddleware")
// Only admin
router.get('/admin',verifyToken, authorizeRole("admin"),(req, res) => {
  res.json({ message: "welcome admin" });
});

// Both access (admin and manager maybe)
router.get('/manager',verifyToken, authorizeRole("admin","manager"),(req, res) => {
  res.json({ message: "welcome manager" });
});

// All can access
router.get('/user',verifyToken,authorizeRole("admin","manager","user"), (req, res) => {
  res.json({ message: "welcome user" });
});

module.exports = router;
