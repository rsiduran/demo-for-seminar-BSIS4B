import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/images/logo.png";

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false); 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState(""); 
  const [lastName, setLastName] = useState(""); 
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      toast.success("Logged in successfully!");
      navigate("/dashboard");
    } else {
      toast.error("Invalid credentials. Please try again.");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (username && password && firstName && lastName) {
      toast.success("Registration successful! Please log in.");
      setIsRegistering(false); 
    } else {
      toast.error("Please fill in all fields.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <img src={logo} alt="Logo" className="w-20 h-20 mx-auto mb-4" />
          <h1 className="text-xl font-bold text-gray-800">
            {isRegistering ? "Register" : "Login"}
          </h1>
        </div>
        <form
          onSubmit={isRegistering ? handleRegister : handleLogin}
          className="space-y-4"
        >
          {isRegistering && (
            <>
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </>
          )}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
          >
            {isRegistering ? "Register" : "Login"}
          </button>
        </form>
        <button
          type="button"
          onClick={() => setIsRegistering(!isRegistering)}
          className="mt-4 w-full py-2 px-4 text-sm text-gray-600 hover:text-blue-500 focus:outline-none"
        >
          {isRegistering
            ? "Already have an account? Login"
            : "Don't have an account? Register"}
        </button>
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default Login;
