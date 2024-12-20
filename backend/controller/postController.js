const db = require("../config/db");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

// Set up Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "blog_images", // Folder name in Cloudinary
    format: async (req, file) => "jpg", // Supports 'png', 'jpeg', etc.
    public_id: (req, file) => Date.now(), // Unique identifier
  },
});

// Initialize multer with Cloudinary storage
const upload = multer({ storage }); // use multer for file uploads

const getAllPosts = async (req, res) => {
  try {
    const [result] = await db.query("SELECT * FROM posts");
    if (result.length === 0) {
      return res.status(404).json({ message: "No record found" });
    }
    res.status(200).json({
      message: "Data retrieved successfully",
      result: result,
    });
  } catch (err) {
    res.status(400).json({ message: "No posts available", err: err });
  }
};

// create post
// const createPost = async (req, res) => {
//   try {
//     const { title, content } = req.body;

//     if (!title || !content) {
//       return res.json({ message: "Pls fill the fields" });
//     }

//     let imageUrl =  null;

//     const [post] = await db.query(
//       "INSERT INTO posts (title,content,image) VALUES (?,?,?)",
//       [title, content, image]
//     );

//     res.status(201).json(
//       post // Assuming `insertId` is the ID of the newly inserted post
//     );
//   } catch (err) {
//     console.error(err);
//   }
// };

const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.user.id; // Get the logged-in user's ID from the token

    console.log(req.body);
    console.log(userId);
    // Validate required fields
    if (!title || !content) {
      return res.status(400).json({ message: "Please fill in all the fields" });
    }

    // Check if the user is an admin (you can also check this directly using `req.user.role`)
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Only admins can create posts" });
    }

    let imageUrl = null; // Initialize imageUrl variable

    // Upload image to Cloudinary if a file is provided
    if (req.file) {
      try {
        const uploadResult = await cloudinary.uploader.upload(req.file.path, {
          folder: "blog_images", // Save images in the 'blog_images' folder
          use_filename: true, // Use the original filename
          unique_filename: false, // Allow duplicate names
        });
        imageUrl = uploadResult.secure_url; // Get the secure URL for the uploaded image
      } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        return res.status(500).json({ message: "Image upload failed", error });
      }
    }

    // Insert the post into the database
    const [post] = await db.query(
      "INSERT INTO posts (title, content, image,user_id) VALUES (?, ?, ?,?)",
      [title, content, imageUrl, userId]
    );

    // Return success response
    res.status(201).json({
      message: "Post created successfully",
      post: {
        id: post.insertId, // ID of the newly created post
        title,
        content,
        image: imageUrl,
        user_id: userId,
      },
    });
  } catch (err) {
    console.error("Error creating post:", err);
    res.status(500).json({ message: "Failed to create post", error: err });
  }
};

//get post by id
const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await db.query("SELECT * FROM posts WHERE id= ?", [id]);
    if (result.length === 0) {
      return res.json({ message: "No posts found" });
    }
    res.status(200).json({ result: result });
  } catch (error) {
    res.status(400).json({ error: "Post not found " });
  }
};

// const delete post
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    console.log("Attempting to delete post with ID:", id);

    // First, check if the post exists
    const [existingPosts] = await db.query("SELECT * FROM posts WHERE id=?", [
      id,
    ]);

    // If no post is found, return an error message
    if (existingPosts.length === 0) {
      return res
        .status(404)
        .json({ message: "No post found with the provided ID" });
    }

    // Proceed to delete the post
    const [result] = await db.query("DELETE FROM posts WHERE id=?", [id]);

    if (result.affectedRows > 0) {
      return res.status(200).json({ message: "Post deleted successfully" });
    } else {
      return res.status(400).json({ message: "Error while deleting the post" });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Error while deleting the post", details: error.message });
  }
};

module.exports = { getAllPosts, createPost, getPostById, deletePost, upload };
