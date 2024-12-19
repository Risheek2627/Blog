import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import { useState, useEffect } from "react";
import CreatePost from "./pages/CreatePost";
// import PostDetails from "./pages/PostDetails";
import Blog from "./pages/Blog";
import Login from "./components/Login";
import Register from "./components/Register";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/create" element={<CreatePost />} />
//         {/* <Route path="/post/:id" element={<PostDetails />} /> */}
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/" element={<Blog />} />
//       </Routes>
//     </Router>
//   );
// }

// todo
// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [role, setRole] = useState(null); // Stores user role ('admin' or 'user')

//   // Check if the user is authenticated on initial load
//   useEffect(() => {
//     const token = localStorage.getItem("token"); // Assuming token is stored in localStorage
//     if (token) {
//       const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decoding JWT token
//       setIsAuthenticated(true);
//       setRole(decodedToken.role); // Assuming your token contains role info
//     }
//   }, []);

//   // Protected Route for Admin (Only accessible to Admin)
//   const AdminRoute = ({ element }) => {
//     return isAuthenticated && role === "admin" ? element : <Navigate to="/" />;
//   };

//   // Protected Route for Authenticated Users (Admins and Regular Users)
//   const ProtectedRoute = ({ element }) => {
//     return isAuthenticated ? element : <Navigate to="/" />;
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />

//         {/* Register and Login routes */}
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />

//         {/* Admin can create posts */}
//         <Route
//           path="/create"
//           element={<AdminRoute element={<CreatePost />} />}
//         />

//         {/* Blog is accessible to all authenticated users */}
//         <Route path="/blog" element={<ProtectedRoute element={<Blog />} />} />

//         {/* Redirect any other routes to Home or a Not Found Page */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Home from "./pages/Home";
// import CreatePost from "./pages/CreatePost";
// import Blog from "./pages/Blog";
// import Register from "./pages/Register";
// import Login from "./pages/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null); // Stores user role ('admin' or 'user')

  // Check if the user is authenticated on initial load
  useEffect(() => {
    const token = localStorage.getItem("token"); // Assuming token is stored in localStorage
    if (token) {
      const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decoding JWT token
      setIsAuthenticated(true);
      setRole(decodedToken.role); // Assuming your token contains role info
    }
  }, []);

  // Protected Route for Admin (Only accessible to Admin)
  const AdminRoute = ({ element }) => {
    return isAuthenticated && role === "admin" ? (
      element
    ) : (
      <Navigate to="/login" />
    );
  };

  // Protected Route for Authenticated Users (Admins and Regular Users)
  const ProtectedRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Register and Login routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Admin can create posts */}
        <Route
          path="/create"
          element={<AdminRoute element={<CreatePost />} />}
        />

        {/* Blog is accessible to all authenticated users */}
        <Route path="/blog" element={<ProtectedRoute element={<Blog />} />} />

        {/* Redirect any other routes to Home or a Not Found Page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
