const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// ======================================================
// REGISTER
// ======================================================

const registerUser = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      password,
      confirmPassword,
      termsAccepted,
    } = req.body;

    // --------------------------------------------
    // 1. Check required fields
    // --------------------------------------------

    if (
      !fullName ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // --------------------------------------------
    // 2. Check Terms & Conditions
    // --------------------------------------------

    if (termsAccepted !== true) {
      return res.status(400).json({
        success: false,
        message: "You must accept the Terms & Conditions",
      });
    }

    // --------------------------------------------
    // 3. Check password match
    // --------------------------------------------

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    // --------------------------------------------
    // 4. Check password length
    // --------------------------------------------

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long",
      });
    }

    // --------------------------------------------
    // 5. Check email format
    // --------------------------------------------

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address",
      });
    }

    // --------------------------------------------
    // 6. Check if email already exists
    // --------------------------------------------

    const normalizedEmail = email.toLowerCase().trim();

    const existingUser = await User.findOne({
      email: normalizedEmail,
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "An account with this email already exists",
      });
    }

    // --------------------------------------------
    // 7. Check phone number
    // --------------------------------------------

    const normalizedPhone = phone.trim();

    if (normalizedPhone.length < 10) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid phone number",
      });
    }

    // --------------------------------------------
    // 8. Hash password
    // --------------------------------------------

    const hashedPassword = await bcrypt.hash(password, 10);

    // --------------------------------------------
    // 9. Create user
    // --------------------------------------------

    const user = await User.create({
      fullName: fullName.trim(),
      email: normalizedEmail,
      phone: normalizedPhone,
      password: hashedPassword,
      role: "customer",
      termsAccepted: true,
    });

    // --------------------------------------------
    // 10. Create JWT
    // --------------------------------------------

    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    // --------------------------------------------
    // 11. Send response
    // --------------------------------------------

    res.status(201).json({
      success: true,
      message: "Account created successfully",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("REGISTER ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Server error during registration",
    });
  }
};

// ======================================================
// LOGIN
// ======================================================

const loginUser = async (req, res) => {
  try {
    const { email, password, rememberMe } = req.body;

    // --------------------------------------------
    // 1. Check fields
    // --------------------------------------------

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // --------------------------------------------
    // 2. Find user
    // --------------------------------------------

    const normalizedEmail = email.toLowerCase().trim();

    const user = await User.findOne({
      email: normalizedEmail,
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // --------------------------------------------
    // 3. Compare password
    // --------------------------------------------

    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // --------------------------------------------
    // 4. JWT expiration
    // --------------------------------------------

    const tokenExpiration = rememberMe ? "30d" : "1d";

    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: tokenExpiration,
      }
    );

    // --------------------------------------------
    // 5. Send response
    // --------------------------------------------

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Server error during login",
    });
  }
};

// ======================================================
// GET CURRENT USER
// ======================================================

const getMe = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      user: {
        id: req.user._id,
        fullName: req.user.fullName,
        email: req.user.email,
        phone: req.user.phone,
        role: req.user.role,
      },
    });
  } catch (error) {
    console.error("GET ME ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};