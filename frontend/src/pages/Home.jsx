// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
// import PostCard from "../components/PostCard";
// import Header from "../components/Header"; // Import Header component
// import Footer from "../components/Footer"; // Import Footer component
// import api from "../api/api";
// export default function Home() {
//   const [posts, setPosts] = useState([]);
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/posts")
//       // api
//       //   .get("/api/posts")
//       .then((response) => {
//         setPosts(response.data.result);
//       })
//       .catch((error) => {
//         console.error("Error fetching posts:", error);
//       });
//   }, []);

//   return (
//     <div className="bg-white min-h-screen flex flex-col">
//       <Header /> {/* Display Header */}
//       <div className="container mx-auto py-10 flex-grow">
//         <h1 className="text-4xl font-bold text-center mb-6">
//           Welcome to My Blog
//         </h1>

//         {/* Button to navigate to create post */}
//         <div className="text-center mb-6">
//           <button
//             className="bg-blue-500 text-white py-2 px-6 rounded-lg"
//             onClick={() => navigate("/create")} // Navigate to CreatePost page
//           >
//             Create Post
//           </button>
//         </div>

//         {/* Display Posts */}
//         {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {posts.map((post) => (
//             <PostCard key={post.id} title={post.title} content={post.content} />
//           ))}
//         </div> */}
//       </div>
//       <Footer /> {/* Display Footer */}
//     </div>
//   );
// }

// todo cloaude ai
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import PostCard from "../components/PostCard";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// export default function Home() {
//   const [posts, setPosts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/posts")
//       .then((response) => {
//         setPosts(response.data.result);
//       })
//       .catch((error) => {
//         console.error("Error fetching posts:", error);
//       });
//   }, []);

//   return (
//     <div class="min-h-screen flex flex-col bg-gradient-white-gray-100">
//       <Header />

//       <main class="container mx-auto px-4 py-12 flex-grow">
//         <div class="max-w-4xl mx-auto">
//           {/* Hero Section */}
//           <div class="text-center mb-16">
//             <h1 class="text-5xl font-bold mb-6 text-blue-600">
//               Welcome to My Blog
//             </h1>
//             <p class="text-lg text-gray-600 mb-8">
//               Discover interesting stories and share your thoughts with the
//               world
//             </p>

//             {/* <button
//               onClick={() => navigate("/create")}
//               class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200"
//             >
//               <span class="mr-2">+</span>
//               Create New Post
//             </button> */}
//           </div>

//           {/* Posts Grid */}
//           <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {posts.map((post) => (
//               <div
//                 key={post.id}
//                 class="transform hover:translate-y-(-4px) transition duration-200"
//               >
//                 <PostCard title={post.title} content={post.content} />
//               </div>
//             ))}
//           </div>

//           {/* Empty State */}
//           {posts.length === 0 && (
//             <div class="text-center py-16">
//               <h3 class="text-xl text-gray-600 mb-4">No posts yet</h3>
//               <p class="text-gray-500">
//                 Be the first to create a post and share your thoughts!
//               </p>
//             </div>
//           )}
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// todo sliding imges
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import PostCard from "../components/PostCard";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";

// // Import required modules
// import { Autoplay, Pagination } from "swiper/modules";

// // image import
// import image1 from "../assets/images/image1.jpg";
// import image2 from "../assets/images/image2.jpg";

// export default function Home() {
//   const [posts, setPosts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/posts")
//       .then((response) => {
//         setPosts(response.data.result);
//       })
//       .catch((error) => {
//         console.error("Error fetching posts:", error);
//       });
//   }, []);

//   return (
//     <div className="bg-white min-h-screen flex flex-col">
//       <Header />

//       {/* Image Carousel */}
//       <div className="container mx-auto my-6">
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={30}
//           slidesPerView={1}
//           autoplay={{ delay: 3000 }}
//           pagination={{ clickable: true }}
//           loop
//           className="rounded-lg shadow-lg"
//         >
//           <SwiperSlide>
//             <img
//               src={image1}
//               alt="Slide 1"
//               className="w-full h-60 sm:h-80 object-cover rounded-lg"
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
//               src={image2}
//               alt="Slide 2"
//               className="w-full h-60 sm:h-80 object-cover rounded-lg"
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
//               src="/api/placeholder/1200/400"
//               alt="Slide 3"
//               className="w-full h-60 sm:h-80 object-cover rounded-lg"
//             />
//           </SwiperSlide>
//         </Swiper>
//       </div>

//       <div className="container mx-auto py-10 flex-grow">
//         <h1 className="text-4xl font-bold text-center mb-6">
//           Welcome to My Blog
//         </h1>

//         {/* Button to navigate to create post */}
//         <div className="text-center mb-6">
//           <button
//             className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors"
//             onClick={() => navigate("/create")}
//           >
//             Create Post
//           </button>
//         </div>

//         {/* Display Posts */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {posts.map((post) => (
//             <PostCard key={post.id} title={post.title} content={post.content} />
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// todo enchaned sliding
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import required modules
import { Autoplay, Pagination } from "swiper/modules";
export default function Home() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

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

  const slides = [
    {
      image: "/src/assets/images/image1.jpg",
      title: "Featured Articles",
      subtitle: "Discover thought-provoking content",
      overlay: "bg-gradient-to-r from-blue-900/70 to-purple-900/70",
    },
    {
      image: "/src/assets/images/image2.jpg",
      title: "Share Your Story",
      subtitle: "Join our community of writers",
      overlay: "bg-gradient-to-r from-green-900/70 to-teal-900/70",
    },
    {
      image: "/src/assets/images/image4.jpg",
      title: "Latest Tech Trends",
      subtitle: "Stay updated with the latest insights",
      overlay: "bg-gradient-to-r from-red-900/70 to-orange-900/70",
    },
    {
      image: "/src/assets/images/image3.jpg",
      title: "Writing Tips & Tutorials",
      subtitle: "Improve your writing skills",
      overlay: "bg-gradient-to-r from-indigo-900/70 to-blue-900/70",
    },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />

      {/* Enhanced Image Carousel */}
      <div className="container mx-auto my-6">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          loop
          className="rounded-xl shadow-2xl"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-[400px] object-cover rounded-xl"
                />
                {/* Gradient Overlay with Text */}
                <div
                  className={`absolute inset-0 ${slide.overlay} rounded-xl flex flex-col items-center justify-center text-white p-6`}
                >
                  <h2 className="text-4xl font-bold mb-4 text-center">
                    {slide.title}
                  </h2>
                  <p className="text-xl text-center">{slide.subtitle}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container mx-auto py-10 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-6">
          Welcome to Our Blogging Community
        </h1>

        {/* Button to navigate to create post */}
        <div className="text-center mb-6">
          <button
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors"
            onClick={() => navigate("/create")}
          >
            Create Post
          </button>
        </div>

        {/* Display Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} title={post.title} content={post.content} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
