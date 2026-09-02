const express = require("express");

const {
  getAddresses,
  addAddress,
  updateAddress,
  deleteAddress,
  setDefaultAddress,
} = require("../controllers/addressController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// ============================================
// SAVED ADDRESS ROUTES
// ============================================

// Get all saved addresses
router.get("/", protect, getAddresses);

// Add new address
router.post("/", protect, addAddress);

// Update address
router.put("/:id", protect, updateAddress);

// Delete address
router.delete("/:id", protect, deleteAddress);

// Set default address
router.patch("/:id/default", protect, setDefaultAddress);

module.exports = router;