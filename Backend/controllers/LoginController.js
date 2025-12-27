const asyncHandler = require("express-async-handler");
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const dotenv = require('dotenv').config();

// Generate JWT token
const generateToken = (id) => {
  const secret = process.env.JWT_SECRET || 'development_secret_key_change_in_production';

  if (!secret) {
    throw new Error('JWT_SECRET is not defined');
  }

  return jwt.sign({ id }, secret, {
    expiresIn: '30d',
  });
};

//@desc Login user
//@route POST /api/users/login
//@access Public
const Login = asyncHandler(async (req, res) => {
  const { Email, Password } = req.body;

  // Check for user email
  const user = await User.findOne({ Email });

  if (!user || user.Password !== Password) {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  // Generate token and send response
  res.status(200).json({
    _id: user.id,
    name: user.UserName,
    email: user.Email,
    token: generateToken(user.id), // Send token in response
  });
});

//@desc Get user profile
//@route GET /api/users/profile
//@access Private (requires token)
const getUserProfile = asyncHandler(async (req, res) => {
  // req.user is set by the protect middleware
  const user = await User.findById(req.user.id).select('-Password');

  if (user) {
    res.json({
      _id: user.id,
      name: user.UserName,
      email: user.Email,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

module.exports = { Login, getUserProfile };