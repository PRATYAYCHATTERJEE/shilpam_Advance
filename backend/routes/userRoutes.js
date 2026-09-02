const express = require("express");

const {
  getProfile,
  updateProfile,
} = require("../controllers/userController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// ============================================
// PROFILE ROUTES
// ============================================

router.get("/profile", protect, getProfile);

router.put("/profile", protect, updateProfile);

module.exports = router;