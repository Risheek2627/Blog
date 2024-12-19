const db = require("../config/db");

// add comment
const addComment = async (req, res) => {
  const { post_id, user_id, content } = req.body;

  try {
    const result = await db.query(
      "INSERT INTO comments_1 (post_id,user_id,content) VALUES(?,?,?)",
      [post_id, user_id, content]
    );
    res
      .status(201)
      .json({ message: "Comment added", commentId: result.insertId });
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ message: "Error adding comment" });
  }
};

// get comment
const getComment = async (req, res) => {
  const post_id = req.params.post_id;

  if (!post_id) {
    res.status(404).json({ message: "No post found on this id" });
  }

  try {
    const [comments] = await db.query(
      "SELECT * FROM comments_1 WHERE post_id = ? ORDER BY created_at DESC",
      [post_id]
    );
    res.status(200).json({ comments });
  } catch (error) {
    console.error("Error retrieving comments:", error);
    res.status(500).json({ message: "Error retrieving comments" });
  }
};

// add like
const addLike = async (req, res) => {
  const { post_id, user_id } = req.body;

  try {
    const [result] = await db.query(
      "INSERT INTO likes_1 (post_id, user_id) VALUES (?, ?)",
      [post_id, user_id]
    );
    res.status(201).json({ message: "Post liked", likeId: result.insertId });
  } catch (error) {
    console.error("Error liking post:", error);
    res.status(500).json({ message: "Error liking post" });
  }
};

const getLike = async (req, res) => {
  const postId = req.params.post_id;

  try {
    const [likes] = await db.query(
      "SELECT COUNT(*) AS like_count FROM likes_1 WHERE post_id = ?",
      [postId]
    );
    res.status(200).json({ like_count: likes[0].like_count });
  } catch (error) {
    console.error("Error retrieving likes:", error);
    res.status(500).json({ message: "Error retrieving likes" });
  }
};

module.exports = { getComment, addComment, getLike, addLike };
