// // CreatePost.jsx
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function CreatePost() {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newPost = { title, content };

//     axios
//       .post("http://localhost:5000/api/create-posts", newPost)
//       .then((response) => {
//         console.log("Post created:", response.data);
//         navigate("/blog");
//         // You can add some UI feedback or redirect
//       })
//       .catch((error) => {
//         console.error("Error creating post:", error);
//       });
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
//       <h2 className="text-2xl font-bold text-center mb-4">Create a New Post</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="title" className="block text-lg font-semibold mb-2">
//             Title
//           </label>
//           <input
//             type="text"
//             id="title"
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Enter post title"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="content" className="block text-lg font-semibold mb-2">
//             Content
//           </label>
//           <textarea
//             id="content"
//             rows="6"
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             placeholder="Write your post content here"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-3 rounded-lg"
//         >
//           Submit Post
//         </button>
//       </form>
//     </div>
//   );
// }

// // todo after cloudinary
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function CreatePost() {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [image, setImage] = useState(null); // State for the image file
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("content", content);
//     if (image) {
//       formData.append("image", image); // Append the image file
//     }

//     axios
//       .post("http://localhost:5000/api/create-posts", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       })
//       .then((response) => {
//         console.log("Post created:", response.data);
//         navigate("/blog");
//       })
//       .catch((error) => {
//         console.error("Error creating post:", error);
//       });
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
//       <h2 className="text-2xl font-bold text-center mb-4">Create a New Post</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="title" className="block text-lg font-semibold mb-2">
//             Title
//           </label>
//           <input
//             type="text"
//             id="title"
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Enter post title"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="content" className="block text-lg font-semibold mb-2">
//             Content
//           </label>
//           <textarea
//             id="content"
//             rows="6"
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             placeholder="Write your post content here"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="image" className="block text-lg font-semibold mb-2">
//             Upload Image
//           </label>
//           <input
//             type="file"
//             id="image"
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             onChange={(e) => setImage(e.target.files[0])}
//             accept="image/*" // Accept only image files
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-3 rounded-lg"
//         >
//           Submit Post
//         </button>
//       </form>
//     </div>
//   );
// }

// todo after admin

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null); // Image for the post
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get token from localStorage
    const token = localStorage.getItem("token");

    if (!token) {
      return alert("You must be logged in to create a post.");
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("image", image);

    // Post creation request
    axios
      .post("http://localhost:5000/api/create-posts", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Post created:", response.data);
        navigate("/blog"); // Redirect to blog page after post creation
      })
      .catch((error) => {
        console.error("Error creating post:", error);
      });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-semibold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-lg font-semibold mb-2">
            Content
          </label>
          <textarea
            id="content"
            rows="6"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your post content here"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-lg font-semibold mb-2">
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            className="w-full p-3 border border-gray-300 rounded-lg"
            onChange={(e) => setImage(e.target.files[0])}
            accept="image/*"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg"
        >
          Submit Post
        </button>
      </form>
    </div>
  );
}
