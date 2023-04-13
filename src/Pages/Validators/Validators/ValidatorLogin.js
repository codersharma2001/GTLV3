import React, { useState } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";

function ValidatorLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <>
    <Navbar></Navbar>
        <div className="flex justify-center items-center h-screen">
        <form
          className="w-full max-w-md bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-2 text-center text-gray-600">
            Login As A Validator
          </h2>

          {/* Username Input */}
          <div className="mb-6">
            <label
              htmlFor="username"
              className="text-xs text-gray-600 block font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your e email"
              className="w-full px-3 py-2 border rounded"
            />
          
          </div>

          {/* Password Input */}
          <div className="mb-1">
            <label
              htmlFor="password"
              className="text-xs text-gray-600 block font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded"
              
            />
           
          </div>

          {/* Forgot Password */}
          <div className="mb-6 text-left">
            <Link to="/forget-password" className="text-xs text-green-800 hover:underline">Forgot Password?</Link>
          </div>

          {/* Login Button */}
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-green-800 text-white py-2 rounded hover:bg-green-900"
            >
              Log in
            </button>
          </div>

        
          <div>
         
          </div>
        </form>
    </div>
    </>
  );
}

export default ValidatorLogin;
