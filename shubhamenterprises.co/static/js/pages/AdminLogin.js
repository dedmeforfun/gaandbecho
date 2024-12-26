import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Default admin credentials
  const adminEmail = "admin@se.co";
  const adminPassword = "Kajal@6292";

  const handleLogin = () => {
    if (email === adminEmail && password === adminPassword) {
      navigate("/admin-panel");
    } else {
      alert("Login failed. Invalid credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Admin Login</h1>

        <div className="space-y-4">
          {/* Email Input */}
          <div className="flex flex-col">
            <label className="text-gray-600 mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col">
            <label className="text-gray-600 mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white py-3 rounded-lg mt-4 hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>

          {/* Forgot Password */}
          <div className="text-center mt-4">
            <a href="/forgot-password" className="text-blue-500 text-sm">
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
