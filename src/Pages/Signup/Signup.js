import React from "react";
import Logo from "../../Assets/Images/Logo.png";

const Signup = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Side */}
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url('/Login-bg.jpg')` }}
      >
        <div className="flex items-center justify-center h-full">
          <img src={Logo} alt="Logo" className="w-1/2" />
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/2 flex items-center justify-center">
        <form className="w-full max-w-md bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-2 text-center text-gray-600">
            Don’t Have An Account?
          </h2>
          <p className="text-xs font-bold mb-4 text-center text-gray-500">
            You can sign up with your mobile number, email <br></br> or your Google account
          </p>

          {/* Username Input */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="text-xs text-gray-600 block font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
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
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          {/* Phone Number Input */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="text-xs text-gray-600 block font-bold mb-2"
            >
              Email
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
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


          {/* Login Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-green-800 text-white py-2 rounded hover:bg-green-900"
            >
              Log in
            </button>
          </div>

          {/* Create New Account */}
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-2">
              Already have an account?{" "}
              <span>
                <a href="/login" className="text-green-800 hover:underline">
                  Please login
                </a>
              </span>{" "}
            </p>
          </div>

          {/* Continue with Google */}
          <div className="mb-2">
            <button
              type="submit"
              className="w-full bg-transparent hover:bg-gray-500 text-gray-600 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
            >
              Continue with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
