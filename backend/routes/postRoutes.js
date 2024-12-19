// /routes/postRoutes.js
const express = require("express");
const {
  getAllPosts,
  createPost,
  getPostById,
  deletePost,
  upload,
} = require("../controller/postController");

const { register, login, isAdmin } = require("../controller/authController");

const router = express.Router();

// Routes definition
router.get("/posts", getAllPosts); // Get all posts
router.post("/create-posts", isAdmin, upload.single("image"), createPost); // Create a new post
router.get("/posts/:id", getPostById); // Get a single post by ID
router.delete("/delete-posts/:id", deletePost);
module.exports = router;

//Auth
router.post("/register", register);
router.post("/login", login);
