import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await axios.post("http://localhost:5000/api/register", {
    //     name,
    //     email,
    //     password,
    //   });
    try {
      const response = await api.post("/api/register", {
        name,
        email,
        password,
      });
      console.log(response.data);
      navigate("/login");
    } catch (err) {
      setError(err.response.data || "Something went wrong.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
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
          Register
        </button>
      </form>
    </div>
  );
}
