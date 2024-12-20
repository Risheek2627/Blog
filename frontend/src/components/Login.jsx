// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:5000/api/login", {
//         email,
//         password,
//       });

//       // Store JWT token in localStorage
//       localStorage.setItem("token", response.data.token);

//       navigate("/blog"); // Redirect to blog after successful login
//     } catch (err) {
//       setError(err.response.data || "Invalid credentials.");
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
//       <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
//       {error && <p className="text-red-500 text-center">{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-lg font-semibold mb-2">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="password"
//             className="block text-lg font-semibold mb-2"
//           >
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-3 rounded-lg"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// todo to see console
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      // try {
      //   const response = await api.post("/api/login", {
      //     email,
      //     password,
      //   });

      // Store JWT token in localStorage
      const token = response.data.token;
      localStorage.setItem("token", token);

      // Decode JWT token to get user role
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );

      const { role } = JSON.parse(jsonPayload);
      console.log(`Logged in as: ${role}`); // Log the role to the console

      navigate("/blog"); // Redirect to blog after successful login
    } catch (err) {
      console.error(err);
      setError(err.response?.data || "Invalid credentials.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-lg font-semibold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
}
