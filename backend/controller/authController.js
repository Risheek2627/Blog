const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/db");

// register
const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const [existingUser] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );
    if (existingUser.length > 0) {
      return res.status(400).send("User already exists");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user into the database
    await db.query(
      "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
      [name, email, hashedPassword, "admin"] // Default role is 'user'
    );

    res.status(201).send("User created successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

// Login Route
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [user] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (user.length === 0) {
      return res.status(400).send("User not found");
    }

    // Compare the hashed password with the entered password
    const isMatch = await bcrypt.compare(password, user[0].password);
    if (!isMatch) {
      return res.status(400).send("Invalid credentials");
    }

    // Create JWT token
    const token = jwt.sign({ id: user[0].id, role: user[0].role }, "rayaru", {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

// Middleware to verify admin role
function isAdmin(req, res, next) {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).send("No token, authorization denied");
  }

  try {
    const decoded = jwt.verify(token, "rayaru");
    if (decoded.role !== "admin") {
      return res.status(403).send("Access denied");
    }
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).send("Token is not valid");
  }
}

module.exports = { register, login, isAdmin };
