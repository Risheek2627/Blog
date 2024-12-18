// import { useState, useEffect } from "react";
// import axios from "axios";
// import PostCard from "../components/PostCard";
// import Header from "../components/Header"; // Import Header

// export default function Blog() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/posts")
//       .then((response) => {
//         console.log(response.data);
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
//       console.log(response.data); // Log success message from the backend
//       // After successful deletion, remove the post from the UI
//       setPosts(posts.filter((post) => post.id !== id));
//     } catch (error) {
//       console.error("Error deleting post:", error);
//     }
//   };
//   return (
//     <div className="bg-white min-h-screen text-gray-900">
//       <div className="container mx-auto py-10">
//         <h1 className="text-4xl font-bold text-center mb-6">All Blogs</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {posts.length > 0 ? (
//             posts.map((post) => (
//               <div
//                 key={post.id}
//                 className="bg-gray-100 p-4 rounded-lg shadow-md"
//               >
//                 <PostCard title={post.title} content={post.content} />
//                 <button
//                   onClick={() => deletePost(post.id)} // Trigger delete when clicked
//                   className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg"
//                 >
//                   Delete Post
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

import { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";
import { useNavigate } from "react-router-dom"; // For navigating to Home page

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/posts")
      .then((response) => {
        setPosts(response.data.result); // Assuming response structure includes `result`
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  const deletePost = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/delete-posts/${id}`
      );
      console.log(response.data); // Log success message from the backend
      // After successful deletion, remove the post from the UI
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="bg-white min-h-screen text-gray-900 flex flex-col">
      {/* Display Navbar with "Home" link */}
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">My Blog</h1>
          <ul className="flex space-x-6">
            <li>
              <button
                onClick={() => navigate("/")} // Navigate to Home page
                className="text-white text-lg"
              >
                Home
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mx-auto py-10 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-6">All Blogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.id} className="bg-white shadow-md rounded-lg p-4">
                <PostCard
                  key={post.id}
                  title={post.title}
                  content={post.content}
                />
                {/* Delete button */}
                <button
                  onClick={() => deletePost(post.id)}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg mt-4"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-lg">No posts available</p>
          )}
        </div>
      </div>
    </div>
  );
}
