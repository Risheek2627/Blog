import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
      });
  }, [id]);

  if (!post) {
    return <p className="text-center mt-10 text-gray-500">Loading post...</p>;
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-6">{post.title}</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <img
          src={post.image || "/default-image.jpg"}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <p className="text-lg text-gray-700">{post.content}</p>
      </div>
    </div>
  );
}
