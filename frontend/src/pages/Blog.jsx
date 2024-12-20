// // import { useState, useEffect } from "react";
// // import axios from "axios";
// // import PostCard from "../components/PostCard";
// // import Header from "../components/Header"; // Import Header

// // export default function Blog() {
// //   const [posts, setPosts] = useState([]);

// //   useEffect(() => {
// //     axios
// //       .get("http://localhost:5000/api/posts")
// //       .then((response) => {
// //         console.log(response.data);
// //         setPosts(response.data.result);
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching posts:", error);
// //       });
// //   }, []);

// //   const deletePost = async (id) => {
// //     try {
// //       const response = await axios.delete(
// //         `http://localhost:5000/api/delete-posts/${id}`
// //       );
// //       console.log(response.data); // Log success message from the backend
// //       // After successful deletion, remove the post from the UI
// //       setPosts(posts.filter((post) => post.id !== id));
// //     } catch (error) {
// //       console.error("Error deleting post:", error);
// //     }
// //   };
// //   return (
// //     <div className="bg-white min-h-screen text-gray-900">
// //       <div className="container mx-auto py-10">
// //         <h1 className="text-4xl font-bold text-center mb-6">All Blogs</h1>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {posts.length > 0 ? (
// //             posts.map((post) => (
// //               <div
// //                 key={post.id}
// //                 className="bg-gray-100 p-4 rounded-lg shadow-md"
// //               >
// //                 <PostCard title={post.title} content={post.content} />
// //                 <button
// //                   onClick={() => deletePost(post.id)} // Trigger delete when clicked
// //                   className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg"
// //                 >
// //                   Delete Post
// //                 </button>
// //               </div>
// //             ))
// //           ) : (
// //             <p className="text-center text-lg">No posts available</p>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import { useState, useEffect } from "react";
// import axios from "axios";
// import PostCard from "../components/PostCard";
// import { useNavigate } from "react-router-dom"; // For navigating to Home page

// export default function Blog() {
//   const [posts, setPosts] = useState([]);
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/posts")
//       .then((response) => {
//         setPosts(response.data.result); // Assuming response structure includes `result`
//       })
//       .catch((error) => {
//         console.error("Error fetching posts:", error);
//       });
//   }, []);

//   const deletePost = async (id) => {
//     try {
//       const response = await axios.delete(
//         `http://localhost:5000/api/delete-posts/${id}`
//       );
//       console.log(response.data); // Log success message from the backend
//       // After successful deletion, remove the post from the UI
//       setPosts(posts.filter((post) => post.id !== id));
//     } catch (error) {
//       console.error("Error deleting post:", error);
//     }
//   };

//   return (
//     <div className="bg-white min-h-screen text-gray-900 flex flex-col">
//       {/* Display Navbar with "Home" link */}
//       <nav className="bg-blue-500 p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-white text-2xl font-bold">My Blog</h1>
//           <ul className="flex space-x-6">
//             <li>
//               <button
//                 onClick={() => navigate("/")} // Navigate to Home page
//                 className="text-white text-lg"
//               >
//                 Home
//               </button>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       <div className="container mx-auto py-10 flex-grow">
//         <h1 className="text-4xl font-bold text-center mb-6">All Blogs</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {posts.length > 0 ? (
//             posts.map((post) => (
//               <div key={post.id} className="bg-white shadow-md rounded-lg p-4">
//                 <PostCard
//                   key={post.id}
//                   title={post.title}
//                   content={post.content}
//                 />
//                 {/* Delete button */}
//                 <button
//                   onClick={() => deletePost(post.id)}
//                   className="bg-red-500 text-white py-2 px-4 rounded-lg mt-4"
//                 >
//                   Delete
//                 </button>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-lg">No posts available</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// todo after cloudinary

// import { useState, useEffect } from "react";
// import axios from "axios";
// import PostCard from "../components/PostCard";
// import { useNavigate } from "react-router-dom"; // For navigating to Home page

// export default function Blog() {
//   const [posts, setPosts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/posts")
//       .then((response) => {
//         setPosts(response.data.result); // Assuming response structure includes `result`
//       })
//       .catch((error) => {
//         console.error("Error fetching posts:", error);
//       });
//   }, []);

//   const deletePost = async (id) => {
//     try {
//       const response = await axios.delete(
//         `http://localhost:5000/api/delete-posts/${id}`
//       );
//       console.log(response.data);
//       setPosts(posts.filter((post) => post.id !== id));
//     } catch (error) {
//       console.error("Error deleting post:", error);
//     }
//   };

//   return (
//     <div className="bg-white min-h-screen text-gray-900 flex flex-col">
//       <nav className="bg-blue-500 p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-white text-2xl font-bold">My Blog</h1>
//           <ul className="flex space-x-6">
//             <li>
//               <button
//                 onClick={() => navigate("/")}
//                 className="text-white text-lg"
//               >
//                 Home
//               </button>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       <div className="container mx-auto py-10 flex-grow">
//         <h1 className="text-4xl font-bold text-center mb-6">All Blogs</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {posts.length > 0 ? (
//             posts.map((post) => (
//               <div key={post.id} className="bg-white shadow-md rounded-lg p-4">
//                 <PostCard
//                   title={post.title}
//                   content={post.content}
//                   image={post.image} // Pass the image URL to PostCard
//                 />
//                 <button
//                   onClick={() => deletePost(post.id)}
//                   className="bg-red-500 text-white py-2 px-4 rounded-lg mt-4"
//                 >
//                   Delete
//                 </button>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-lg">No posts available</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// todo role based acccess
// import { useState, useEffect } from "react";
// import axios from "axios";
// import PostCard from "../components/PostCard";
// import { useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode"; // Changed import statement

// export default function Blog() {
//   const [posts, setPosts] = useState([]);
//   const [role, setRole] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Decode JWT token to determine the user's role
//     const token = localStorage.getItem("token");
//     if (token) {
//       try {
//         const decodedToken = jwtDecode(token);
//         setRole(decodedToken.role);
//       } catch (err) {
//         console.error("Error decoding token:", err);
//       }
//     }

//     // Fetch posts
//     axios
//       .get("http://localhost:5000/api/posts")
//       .then((response) => {
//         setPosts(response.data.result);
//       })
//       .catch((error) => {
//         console.error("Error fetching posts:", error);
//       });
//   }, []);

//   const deletePost = async (id) => {
//     try {
//       const response = await axios.delete(
//         `http://localhost:5000/api/delete-posts/${id}`
//       );
//       console.log(response.data);
//       setPosts(posts.filter((post) => post.id !== id));
//     } catch (error) {
//       console.error("Error deleting post:", error);
//     }
//   };

//   return (
//     <div className="bg-white min-h-screen text-gray-900 flex flex-col">
//       <nav className="bg-blue-500 p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-white text-2xl font-bold">My Blog</h1>
//           <ul className="flex space-x-6">
//             <li>
//               <button
//                 onClick={() => navigate("/")}
//                 className="text-white text-lg"
//               >
//                 Home
//               </button>
//             </li>
//             {role === "admin" && (
//               <li>
//                 <button
//                   onClick={() => navigate("/create")}
//                   className="text-white text-lg"
//                 >
//                   Create Post
//                 </button>
//               </li>
//             )}
//           </ul>
//         </div>
//       </nav>

//       <div className="container mx-auto py-10 flex-grow">
//         <h1 className="text-4xl font-bold text-center mb-6">All Blogs</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {posts.length > 0 ? (
//             posts.map((post) => (
//               <div key={post.id} className="bg-white shadow-md rounded-lg p-4">
//                 <PostCard
//                   title={post.title}
//                   content={post.content}
//                   image={post.image}
//                 />
//                 {role === "admin" && (
//                   <button
//                     onClick={() => deletePost(post.id)}
//                     className="bg-red-500 text-white py-2 px-4 rounded-lg mt-4"
//                   >
//                     Delete
//                   </button>
//                 )}
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-lg">No posts available</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// todo add likes and comments
// import { useState, useEffect } from "react";
// import axios from "axios";
// import PostCard from "../components/PostCard";
// import { useNavigate } from "react-router-dom";
// import jwt_decode from "jwt-decode"; // Correct import

// export default function Blog() {
//   const [posts, setPosts] = useState([]);
//   const [role, setRole] = useState(null);
//   const [comments, setComments] = useState({});
//   const [likes, setLikes] = useState({});
//   const [newComment, setNewComment] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Decode JWT token to determine the user's role
//     const token = localStorage.getItem("token");
//     if (token) {
//       try {
//         const decodedToken = jwtDecode(token);
//         setRole(decodedToken.role);
//       } catch (err) {
//         console.error("Error decoding token:", err);
//       }
//     }

//     // Fetch posts
//     axios
//       .get("http://localhost:5000/api/posts")
//       .then((response) => {
//         setPosts(response.data.result);
//       })
//       .catch((error) => {
//         console.error("Error fetching posts:", error);
//       });
//   }, []);

//   // Fetch comments for a post
//   const fetchComments = (postId) => {
//     axios
//       .get(`http://localhost:5000/api/comments/${postId}`)
//       .then((response) => {
//         setComments((prev) => ({
//           ...prev,
//           [postId]: response.data.comments,
//         }));
//       })
//       .catch((error) => {
//         console.error("Error fetching comments:", error);
//       });
//   };

//   // Fetch likes for a post
//   const fetchLikes = (postId) => {
//     axios
//       .get(`http://localhost:5000/api/likes/${postId}`)
//       .then((response) => {
//         setLikes((prev) => ({
//           ...prev,
//           [postId]: response.data.like_count,
//         }));
//       })
//       .catch((error) => {
//         console.error("Error fetching likes:", error);
//       });
//   };

//   // Add comment
//   const addComment = (postId) => {
//     const token = localStorage.getItem("token");
//     const decodedToken = jwt_decode(token);
//     const userId = decodedToken.user_id; // Extract user_id from the token

//     axios
//       .post("http://localhost:5000/api/comments", {
//         post_id: postId, // Post ID
//         user_id: userId, // User ID
//         content: newComment,
//       })
//       .then(() => {
//         setNewComment("");
//         fetchComments(postId); // Refresh comments
//       })
//       .catch((error) => {
//         console.error("Error adding comment:", error);
//       });
//   };

//   // Add like
//   const addLike = (postId) => {
//     const token = localStorage.getItem("token");
//     const decodedToken = jwt_decode(token);
//     const userId = decodedToken.user_id; // Extract user_id from the token

//     axios
//       .post("http://localhost:5000/api/likes", {
//         post_id: postId,
//         user_id: userId,
//       })
//       .then(() => {
//         fetchLikes(postId); // Refresh likes count
//       })
//       .catch((error) => {
//         console.error("Error liking post:", error);
//       });
//   };

//   return (
//     <div className="bg-white min-h-screen text-gray-900 flex flex-col">
//       <nav className="bg-blue-500 p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-white text-2xl font-bold">My Blog</h1>
//           <ul className="flex space-x-6">
//             <li>
//               <button
//                 onClick={() => navigate("/")}
//                 className="text-white text-lg"
//               >
//                 Home
//               </button>
//             </li>
//             {role === "admin" && (
//               <li>
//                 <button
//                   onClick={() => navigate("/create")}
//                   className="text-white text-lg"
//                 >
//                   Create Post
//                 </button>
//               </li>
//             )}
//           </ul>
//         </div>
//       </nav>

//       <div className="container mx-auto py-10 flex-grow">
//         <h1 className="text-4xl font-bold text-center mb-6">All Blogs</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {posts.length > 0 ? (
//             posts.map((post) => (
//               <div key={post.id} className="bg-white shadow-md rounded-lg p-4">
//                 <PostCard
//                   title={post.title}
//                   content={post.content}
//                   image={post.image}
//                 />
//                 <button
//                   onClick={() => addLike(post.id)} // Like action
//                   className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4"
//                 >
//                   Like
//                 </button>
//                 <p>{likes[post.id] || 0} Likes</p>

//                 <div className="mt-4">
//                   <textarea
//                     value={newComment}
//                     onChange={(e) => setNewComment(e.target.value)}
//                     placeholder="Write a comment"
//                     className="w-full p-2 border border-gray-300 rounded-md"
//                   ></textarea>
//                   <button
//                     onClick={() => addComment(post.id)} // Comment action
//                     className="bg-green-500 text-white py-2 px-4 rounded-lg mt-2"
//                   >
//                     Add Comment
//                   </button>
//                   <div className="mt-4">
//                     <h3 className="font-semibold">Comments</h3>
//                     <ul>
//                       {comments[post.id] &&
//                         comments[post.id].map((comment) => (
//                           <li key={comment.id}>{comment.content}</li>
//                         ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-lg">No posts available</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// todo   added logo for like and comment
// import { useState, useEffect } from "react";
// import axios from "axios";
// import PostCard from "../components/PostCard";
// import { useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";

// export default function Blog() {
//   const [posts, setPosts] = useState([]);
//   const [role, setRole] = useState(null);
//   const [comments, setComments] = useState({});
//   const [likes, setLikes] = useState({});
//   const [newComment, setNewComment] = useState("");
//   const [showCommentBox, setShowCommentBox] = useState(null); // To toggle comment box visibility
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Decode JWT token to determine the user's role
//     const token = localStorage.getItem("token");
//     if (token) {
//       try {
//         const decodedToken = jwtDecode(token);
//         setRole(decodedToken.role);
//       } catch (err) {
//         console.error("Error decoding token:", err);
//       }
//     }

//     // Fetch posts
//     axios
//       .get("http://localhost:5000/api/posts")
//       .then((response) => {
//         setPosts(response.data.result);
//       })
//       .catch((error) => {
//         console.error("Error fetching posts:", error);
//       });
//   }, []);

//   // Fetch comments for a post
//   const fetchComments = (postId) => {
//     axios
//       .get(`http://localhost:5000/api/comments/${postId}`)
//       .then((response) => {
//         setComments((prev) => ({
//           ...prev,
//           [postId]: response.data.comments,
//         }));
//       })
//       .catch((error) => {
//         console.error("Error fetching comments:", error);
//       });
//   };

//   // Fetch likes for a post
//   const fetchLikes = (postId) => {
//     axios
//       .get(`http://localhost:5000/api/likes/${postId}`)
//       .then((response) => {
//         setLikes((prev) => ({
//           ...prev,
//           [postId]: response.data.like_count,
//         }));
//       })
//       .catch((error) => {
//         console.error("Error fetching likes:", error);
//       });
//   };

//   // Add comment
//   const addComment = (postId) => {
//     const token = localStorage.getItem("token");
//     const decodedToken = jwtDecode(token);
//     const userId = decodedToken.user_id; // Extract user_id from the token

//     axios
//       .post("http://localhost:5000/api/comments", {
//         post_id: postId, // Post ID
//         user_id: userId, // User ID
//         content: newComment,
//       })
//       .then(() => {
//         setNewComment("");
//         setShowCommentBox(null); // Close comment box
//         fetchComments(postId); // Refresh comments
//       })
//       .catch((error) => {
//         console.error("Error adding comment:", error);
//       });
//   };

//   // Add like
//   const addLike = (postId) => {
//     const token = localStorage.getItem("token");
//     const decodedToken = jwtDecode(token);
//     const userId = decodedToken.user_id; // Extract user_id from the token

//     axios
//       .post("http://localhost:5000/api/likes", {
//         post_id: postId,
//         user_id: userId,
//       })
//       .then(() => {
//         fetchLikes(postId); // Refresh likes count
//       })
//       .catch((error) => {
//         console.error("Error liking post:", error);
//       });
//   };

//   return (
//     <div className="bg-white min-h-screen text-gray-900 flex flex-col">
//       <nav className="bg-blue-500 p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-white text-2xl font-bold">My Blog</h1>
//           <ul className="flex space-x-6">
//             <li>
//               <button
//                 onClick={() => navigate("/")}
//                 className="text-white text-lg"
//               >
//                 Home
//               </button>
//             </li>
//             {role === "admin" && (
//               <li>
//                 <button
//                   onClick={() => navigate("/create")}
//                   className="text-white text-lg"
//                 >
//                   Create Post
//                 </button>
//               </li>
//             )}
//           </ul>
//         </div>
//       </nav>

//       <div className="container mx-auto py-10 flex-grow">
//         <h1 className="text-4xl font-bold text-center mb-6">All Blogs</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {posts.length > 0 ? (
//             posts.map((post) => (
//               <div key={post.id} className="bg-white shadow-md rounded-lg p-4">
//                 <PostCard
//                   title={post.title}
//                   content={post.content}
//                   image={post.image}
//                 />

//                 {/* Heart Icon for Like */}
//                 <button
//                   onClick={() => addLike(post.id)}
//                   className="text-red-500 text-2xl"
//                 >
//                   <i
//                     className={`fa ${
//                       likes[post.id] > 0 ? "fa-heart" : "fa-heart-o"
//                     }`}
//                   ></i>
//                 </button>
//                 <p>{likes[post.id] || 0} Likes</p>

//                 {/* Comment Icon */}
//                 <button
//                   onClick={() => {
//                     setShowCommentBox(post.id); // Toggle comment box visibility
//                     fetchComments(post.id); // Fetch comments for the post
//                   }}
//                   className="text-blue-500 text-2xl mt-2"
//                 >
//                   <i className="fa fa-comment"></i>
//                 </button>

//                 {/* Comment Section */}
//                 {showCommentBox === post.id && (
//                   <div className="mt-4">
//                     <textarea
//                       value={newComment}
//                       onChange={(e) => setNewComment(e.target.value)}
//                       placeholder="Write a comment"
//                       className="w-full p-2 border border-gray-300 rounded-md"
//                     ></textarea>
//                     <button
//                       onClick={() => addComment(post.id)}
//                       className="bg-green-500 text-white py-2 px-4 rounded-lg mt-2"
//                     >
//                       Add Comment
//                     </button>
//                     <div className="mt-4">
//                       <h3 className="font-semibold">Comments</h3>
//                       <ul>
//                         {comments[post.id] &&
//                           comments[post.id].map((comment) => (
//                             <li key={comment.id}>{comment.content}</li>
//                           ))}
//                       </ul>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-lg">No posts available</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// todo after changing
// import { useState, useEffect } from "react";
// import axios from "axios";
// import PostCard from "../components/PostCard";
// import { useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";

// export default function Blog() {
//   const [posts, setPosts] = useState([]);
//   const [role, setRole] = useState(null);
//   const [comments, setComments] = useState({});
//   const [likes, setLikes] = useState({});
//   const [newComment, setNewComment] = useState("");
//   const [showCommentBox, setShowCommentBox] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       try {
//         const decodedToken = jwtDecode(token);
//         setRole(decodedToken.role);
//       } catch (err) {
//         console.error("Error decoding token:", err);
//       }
//     }

//     // Fetch posts
//     axios
//       .get("http://localhost:5000/api/posts")
//       .then((response) => {
//         setPosts(response.data.result);
//         response.data.result.forEach((post) => {
//           // Fetch likes and comments for each post when posts are fetched
//           fetchLikes(post.id);
//           fetchComments(post.id);
//         });
//       })
//       .catch((error) => {
//         console.error("Error fetching posts:", error);
//       });
//   }, []);

//   const fetchComments = (postId) => {
//     axios
//       .get(`http://localhost:5000/api/comments/${postId}`)
//       .then((response) => {
//         setComments((prev) => ({
//           ...prev,
//           [postId]: response.data.comments,
//         }));
//       })
//       .catch((error) => {
//         console.error("Error fetching comments:", error);
//       });
//   };

//   const fetchLikes = (postId) => {
//     axios
//       .get(`http://localhost:5000/api/likes/${postId}`)
//       .then((response) => {
//         setLikes((prev) => ({
//           ...prev,
//           [postId]: response.data.like_count,
//         }));
//       })
//       .catch((error) => {
//         console.error("Error fetching likes:", error);
//       });
//   };

//   const addComment = (postId) => {
//     const token = localStorage.getItem("token");
//     const decodedToken = jwtDecode(token);
//     const userId = decodedToken.user_id;

//     axios
//       .post("http://localhost:5000/api/comments", {
//         post_id: postId,
//         user_id: userId,
//         content: newComment,
//       })
//       .then(() => {
//         setNewComment("");
//         setShowCommentBox(null); // Close comment box
//         fetchComments(postId); // Refresh comments
//       })
//       .catch((error) => {
//         console.error("Error adding comment:", error);
//       });
//   };

//   const addLike = (postId) => {
//     const token = localStorage.getItem("token");
//     const decodedToken = jwtDecode(token);
//     const userId = decodedToken.user_id;

//     axios
//       .post("http://localhost:5000/api/likes", {
//         post_id: postId,
//         user_id: userId,
//       })
//       .then(() => {
//         fetchLikes(postId); // Refresh likes count
//       })
//       .catch((error) => {
//         console.error("Error liking post:", error);
//       });
//   };

//   return (
//     <div className="bg-white min-h-screen text-gray-900 flex flex-col">
//       <nav className="bg-blue-500 p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-white text-2xl font-bold">My Blog</h1>
//           <ul className="flex space-x-6">
//             <li>
//               <button
//                 onClick={() => navigate("/")}
//                 className="text-white text-lg"
//               >
//                 Home
//               </button>
//             </li>
//             {role === "admin" && (
//               <li>
//                 <button
//                   onClick={() => navigate("/create")}
//                   className="text-white text-lg"
//                 >
//                   Create Post
//                 </button>
//               </li>
//             )}
//           </ul>
//         </div>
//       </nav>

//       <div className="container mx-auto py-10 flex-grow">
//         <h1 className="text-4xl font-bold text-center mb-6">All Blogs</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {posts.length > 0 ? (
//             posts.map((post) => (
//               <div key={post.id} className="bg-white shadow-md rounded-lg p-4">
//                 <PostCard
//                   title={post.title}
//                   content={post.content}
//                   image={post.image}
//                 />

//                 {/* Heart Icon for Like */}
//                 <button
//                   onClick={() => addLike(post.id)}
//                   className="text-red-500 text-2xl"
//                 >
//                   <i
//                     className={`fa ${
//                       likes[post.id] > 0 ? "fa-heart" : "fa-heart-o"
//                     }`}
//                   ></i>
//                 </button>
//                 <p>{likes[post.id] || 0} Likes</p>

//                 {/* Comment Icon */}
//                 <button
//                   onClick={() => {
//                     setShowCommentBox(post.id); // Toggle comment box visibility
//                     fetchComments(post.id); // Fetch comments for the post
//                   }}
//                   className="text-blue-500 text-2xl mt-2"
//                 >
//                   <i className="fa fa-comment"></i>
//                 </button>

//                 {/* Comment Section */}
//                 {showCommentBox === post.id && (
//                   <div className="mt-4">
//                     <textarea
//                       value={newComment}
//                       onChange={(e) => setNewComment(e.target.value)}
//                       placeholder="Write a comment"
//                       className="w-full p-2 border border-gray-300 rounded-md"
//                     ></textarea>
//                     <button
//                       onClick={() => addComment(post.id)}
//                       className="bg-green-500 text-white py-2 px-4 rounded-lg mt-2"
//                     >
//                       Add Comment
//                     </button>
//                     <div className="mt-4">
//                       <h3 className="font-semibold">Comments</h3>
//                       <ul>
//                         {comments[post.id] &&
//                           comments[post.id].map((comment) => (
//                             <li key={comment.id}>{comment.content}</li>
//                           ))}
//                       </ul>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-lg">No posts available</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// todo old code
// import { useState, useEffect } from "react";
// import axios from "axios";
// import PostCard from "../components/PostCard";
// import { useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";
// import api from "../api/api";

// export default function Blog() {
//   const [posts, setPosts] = useState([]);
//   const [role, setRole] = useState(null);
//   const [comments, setComments] = useState({});
//   const [likes, setLikes] = useState({});
//   const [newComment, setNewComment] = useState("");
//   const [showCommentBox, setShowCommentBox] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       try {
//         const decodedToken = jwtDecode(token);
//         setRole(decodedToken.role);
//       } catch (err) {
//         console.error("Error decoding token:", err);
//       }
//     }

//     // Fetch posts
//     axios
//       .get("http://localhost:5000/api/posts")
//       // api
//       //   .get("/api/posts")
//       .then((response) => {
//         setPosts(response.data.result);
//         response.data.result.forEach((post) => {
//           // Fetch likes and comments for each post when posts are fetched
//           fetchLikes(post.id);
//           fetchComments(post.id);
//         });
//       })
//       .catch((error) => {
//         console.error("Error fetching posts:", error);
//       });
//   }, []);

//   const fetchComments = (postId) => {
//     axios
//       .get(`http://localhost:5000/api/comments/${postId}`)
//       // api
//       //   .get(`/api/comments/${postId}`)
//       .then((response) => {
//         setComments((prev) => ({
//           ...prev,
//           [postId]: response.data.comments,
//         }));
//       })
//       .catch((error) => {
//         console.error("Error fetching comments:", error);
//       });
//   };

//   const fetchLikes = (postId) => {
//     axios
//       .get(`http://localhost:5000/api/likes/${postId}`)
//       // api
//       //   .get(`/api/likes/${postId}`)
//       .then((response) => {
//         setLikes((prev) => ({
//           ...prev,

//           [postId]: response.data.like_count,
//         }));
//       })
//       .catch((error) => {
//         console.error("Error fetching likes:", error);
//       });
//   };

//   const addComment = (postId) => {
//     const token = localStorage.getItem("token");
//     const decodedToken = jwtDecode(token);
//     const userId = decodedToken.user_id;

//     axios
//       .post("http://localhost:5000/api/comments", {
//         post_id: postId,
//         user_id: userId,
//         content: newComment,
//       })
//       // api
//       //   .post("/api/comments", {
//       //     post_id: postId,
//       //     user_id: userId,
//       //     content: newComment,
//       //   })
//       .then(() => {
//         setNewComment("");
//         setShowCommentBox(null); // Close comment box
//         fetchComments(postId); // Refresh comments
//       })
//       .catch((error) => {
//         console.error("Error adding comment:", error);
//       });
//   };

//   const addLike = (postId) => {
//     const token = localStorage.getItem("token");
//     const decodedToken = jwtDecode(token);
//     const userId = decodedToken.user_id;

//     axios
//       .post("http://localhost:5000/api/likes", {
//         post_id: postId,
//         user_id: userId,
//       })
//       // api
//       //   .post("/api/likes", {
//       //     post_id: postId,
//       //     user_id: userId,
//       //   })
//       .then(() => {
//         fetchLikes(postId); // Refresh likes count
//       })
//       .catch((error) => {
//         console.error("Error liking post:", error);
//       });
//   };

//   const deletePost = (postId) => {
//     axios
//       .delete(`http://localhost:5000/api/delete-posts/${postId}`)
//       // api
//       //   .delete(`/api/delete-posts/${postId}`)
//       .then(() => {
//         // Remove the deleted post from the UI
//         setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
//       })
//       .catch((error) => {
//         console.error("Error deleting post:", error);
//       });
//   };

//   return (
//     <div className="bg-white min-h-screen text-gray-900 flex flex-col">
//       <nav className="bg-blue-500 p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-white text-2xl font-bold">My Blog</h1>
//           <ul className="flex space-x-6">
//             <li>
//               <button
//                 onClick={() => navigate("/")}
//                 className="text-white text-lg"
//               >
//                 Home
//               </button>
//             </li>
//             {role === "admin" && (
//               <li>
//                 <button
//                   onClick={() => navigate("/create")}
//                   className="text-white text-lg"
//                 >
//                   Create Post
//                 </button>
//               </li>
//             )}
//           </ul>
//         </div>
//       </nav>

//       <div className="container mx-auto py-10 flex-grow">
//         <h1 className="text-4xl font-bold text-center mb-6">All Blogs</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {posts.length > 0 ? (
//             posts.map((post) => (
//               <div key={post.id} className="bg-white shadow-md rounded-lg p-4">
//                 <PostCard
//                   title={post.title}
//                   content={post.content}
//                   image={post.image}
//                 />

//                 {/* Heart Icon for Like */}
//                 <button
//                   onClick={() => addLike(post.id)}
//                   className="text-red-500 text-2xl"
//                 >
//                   <i
//                     className={`fa ${
//                       likes[post.id] > 0 ? "fa-heart" : "fa-heart-o"
//                     }`}
//                   ></i>
//                 </button>
//                 <p>{likes[post.id] || 0} Likes</p>

//                 {/* Comment Icon */}
//                 <button
//                   onClick={() => {
//                     setShowCommentBox(post.id); // Toggle comment box visibility
//                     fetchComments(post.id); // Fetch comments for the post
//                   }}
//                   className="text-blue-500 text-2xl mt-2"
//                 >
//                   <i className="fa fa-comment"></i>
//                 </button>

//                 {/* Admin Delete Button */}
//                 {role === "admin" && (
//                   <button
//                     onClick={() => deletePost(post.id)}
//                     className="bg-red-500 text-white py-1 px-4 rounded-md mt-2"
//                   >
//                     Delete Post
//                   </button>
//                 )}

//                 {/* Comment Section */}
//                 {showCommentBox === post.id && (
//                   <div className="mt-4">
//                     <textarea
//                       value={newComment}
//                       onChange={(e) => setNewComment(e.target.value)}
//                       placeholder="Write a comment"
//                       className="w-full p-2 border border-gray-300 rounded-md"
//                     ></textarea>
//                     <button
//                       onClick={() => addComment(post.id)}
//                       className="bg-green-500 text-white py-2 px-4 rounded-lg mt-2"
//                     >
//                       Add Comment
//                     </button>
//                     <div className="mt-4">
//                       <h3 className="font-semibold">Comments</h3>
//                       <ul>
//                         {comments[post.id] &&
//                           comments[post.id].map((comment) => (
//                             <li key={comment.id}>{comment.content}</li>
//                           ))}
//                       </ul>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-lg">No posts available</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// todo cloaude ai
import { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../api/api";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [role, setRole] = useState(null);
  const [comments, setComments] = useState({});
  const [likes, setLikes] = useState({});
  const [newComment, setNewComment] = useState("");
  const [showCommentBox, setShowCommentBox] = useState(null);
  const navigate = useNavigate();

  // Keeping all the existing useEffect and functions the same
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setRole(decodedToken.role);
      } catch (err) {
        console.error("Error decoding token:", err);
      }
    }

    axios
      .get("http://localhost:5000/api/posts")
      .then((response) => {
        setPosts(response.data.result);
        response.data.result.forEach((post) => {
          fetchLikes(post.id);
          fetchComments(post.id);
        });
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  const fetchComments = (postId) => {
    axios
      .get(`http://localhost:5000/api/comments/${postId}`)
      .then((response) => {
        setComments((prev) => ({
          ...prev,
          [postId]: response.data.comments,
        }));
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  };

  const fetchLikes = (postId) => {
    axios
      .get(`http://localhost:5000/api/likes/${postId}`)
      .then((response) => {
        setLikes((prev) => ({
          ...prev,
          [postId]: response.data.like_count,
        }));
      })
      .catch((error) => {
        console.error("Error fetching likes:", error);
      });
  };

  const addComment = (postId) => {
    const token = localStorage.getItem("token");
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.user_id;

    axios
      .post("http://localhost:5000/api/comments", {
        post_id: postId,
        user_id: userId,
        content: newComment,
      })
      .then(() => {
        setNewComment("");
        fetchComments(postId);
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
      });
  };

  const addLike = (postId) => {
    const token = localStorage.getItem("token");
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.user_id;

    axios
      .post("http://localhost:5000/api/likes", {
        post_id: postId,
        user_id: userId,
      })
      .then(() => {
        fetchLikes(postId);
      })
      .catch((error) => {
        console.error("Error liking post:", error);
      });
  };

  const deletePost = (postId) => {
    axios
      .delete(`http://localhost:5000/api/delete-posts/${postId}`)
      .then(() => {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  // New function to handle comment box toggle
  const toggleCommentBox = (postId) => {
    if (showCommentBox === postId) {
      setShowCommentBox(null); // Hide comment box if already showing
    } else {
      setShowCommentBox(postId); // Show comment box if hidden
      fetchComments(postId); // Fetch comments when showing
    }
  };

  // return (
  //   <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
  //     <nav className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
  //       <div className="max-w-7xl mx-auto px-4 py-3">
  //         <div className="flex justify-between items-center">
  //           <h1 className="text-2xl font-bold text-white tracking-wide hover:text-blue-200 transition-colors duration-300">
  //             My Blog
  //           </h1>
  //           <div className="flex gap-6">
  //             <button
  //               onClick={() => navigate("/")}
  //               className="px-4 py-2 text-white hover:bg-blue-700 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
  //             >
  //               Home
  //             </button>
  //             {role === "admin" && (
  //               <button
  //                 onClick={() => navigate("/create")}
  //                 className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 ease-in-out transform hover:scale-105"
  //               >
  //                 Create Post
  //               </button>
  //             )}
  //           </div>
  //         </div>
  //       </div>
  //     </nav>
  //todo  updted navbar
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Updated Navbar Design */}
      <nav className="bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <h1 className="text-3xl font-bold text-white tracking-wide">
                My Blog
              </h1>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-white text-sm">
                Stories
              </span>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => navigate("/")}
                className="px-6 py-2 text-white bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full transition-all duration-300 ease-in-out font-medium"
              >
                Home
              </button>
              {role === "admin" && (
                <button
                  onClick={() => navigate("/create")}
                  className="px-6 py-2 bg-white text-purple-600 rounded-full hover:bg-opacity-90 transition-all duration-300 ease-in-out font-medium"
                >
                  Create Post
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-900 hover:text-blue-700 transition-colors duration-300">
          Latest Blog Posts
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.length > 0 ? (
            posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <PostCard
                    title={post.title}
                    content={post.content}
                    image={post.image}
                  />

                  <div className="flex items-center gap-4 mt-4">
                    <button
                      onClick={() => addLike(post.id)}
                      className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors duration-300"
                    >
                      <i
                        className={`fa ${
                          likes[post.id] > 0 ? "fa-heart" : "fa-heart-o"
                        } text-2xl`}
                      ></i>
                      <span>{likes[post.id] || 0}</span>
                    </button>

                    <button
                      onClick={() => toggleCommentBox(post.id)}
                      className={`flex items-center gap-2 transition-colors duration-300 ${
                        showCommentBox === post.id
                          ? "text-blue-600"
                          : "text-blue-500 hover:text-blue-600"
                      }`}
                    >
                      <i className="fa fa-comment text-2xl"></i>
                      {comments[post.id]?.length > 0 && (
                        <span className="text-sm">
                          ({comments[post.id].length})
                        </span>
                      )}
                    </button>

                    {role === "admin" && (
                      <button
                        onClick={() => deletePost(post.id)}
                        className="ml-auto px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
                      >
                        Delete
                      </button>
                    )}
                  </div>

                  {showCommentBox === post.id && (
                    <div className="mt-6 space-y-4">
                      <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Share your thoughts..."
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                        rows="3"
                      />
                      <button
                        onClick={() => addComment(post.id)}
                        className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                      >
                        Post Comment
                      </button>

                      {comments[post.id]?.length > 0 && (
                        <div className="mt-4 space-y-3">
                          <h3 className="font-semibold text-gray-700">
                            Comments
                          </h3>
                          <ul className="space-y-2">
                            {comments[post.id].map((comment) => (
                              <li
                                key={comment.id}
                                className="p-3 bg-gray-50 rounded-lg text-gray-700"
                              >
                                {comment.content}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))
          ) : (
            <p className="col-span-full text-center text-lg text-gray-600">
              No posts available yet. Check back soon!
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
