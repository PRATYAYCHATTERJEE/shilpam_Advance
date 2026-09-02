const User = require("../models/User");

// ============================================
// GET MY PROFILE
// ============================================

const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        role: user.role,
        termsAccepted: user.termsAccepted,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    console.error("GET PROFILE ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Unable to get profile",
    });
  }
};

// ============================================
// UPDATE MY PROFILE
// ============================================

const updateProfile = async (req, res) => {
  try {
    const { fullName, phone } = req.body;

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (fullName !== undefined) {
      if (fullName.trim().length < 2) {
        return res.status(400).json({
          success: false,
          message: "Full name must be at least 2 characters",
        });
      }

      user.fullName = fullName.trim();
    }

    if (phone !== undefined) {
      if (phone.trim().length < 10) {
        return res.status(400).json({
          success: false,
          message: "Please enter a valid phone number",
        });
      }

      user.phone = phone.trim();
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        role: user.role,
        termsAccepted: user.termsAccepted,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    console.error("UPDATE PROFILE ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Unable to update profile",
    });
  }
};

module.exports = {
  getProfile,
  updateProfile,
};