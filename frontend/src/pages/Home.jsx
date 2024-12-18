import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import PostCard from "../components/PostCard";
import Header from "../components/Header"; // Import Header component
import Footer from "../components/Footer"; // Import Footer component

export default function Home() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/posts")
      .then((response) => {
        setPosts(response.data.result);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header /> {/* Display Header */}
      <div className="container mx-auto py-10 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-6">
          Welcome to My Blog
        </h1>

        {/* Button to navigate to create post */}
        <div className="text-center mb-6">
          <button
            className="bg-blue-500 text-white py-2 px-6 rounded-lg"
            onClick={() => navigate("/create")} // Navigate to CreatePost page
          >
            Create Post
          </button>
        </div>

        {/* Display Posts */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} title={post.title} content={post.content} />
          ))}
        </div> */}
      </div>
      <Footer /> {/* Display Footer */}
    </div>
  );
}
