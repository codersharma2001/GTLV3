import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Images/Logo.png";
import { AuthContext } from "../../contexts/AuthProvider";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { createUser, updateUser, verifyEmail, googleSignIn } =
    useContext(AuthContext);
  const [signupError, setSignupError] = useState("");

  const handleSignup = async (data) => {
    console.log(data);
    setSignupError("");

    // Create user in Firebase Authentication
    try {
      const result = await createUser(data.email, data.password);
      const user = result.user;
      console.log(user);

      const userInfo = {
        displayName: data.username,
      };

      // Verify email
      await verifyEmail();
      toast("Please check your email and verify");

      // Update user info
      await updateUser(userInfo);

      // Send data to API
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
      } else {
        throw new Error("Failed to send data to API");
      }
    } catch (error) {
      console.log(error);
      setSignupError(error.message);
    }
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error("error: ", error);
      });
  };

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
        <form
          onSubmit={handleSubmit(handleSignup)}
          className="w-full max-w-md bg-white rounded-lg shadow-sm p-8"
        >
          <h2 className="text-2xl font-bold mb-2 text-center text-gray-600">
            Don’t Have An Account?
          </h2>
          <p className="text-xs font-bold mb-4 text-center text-gray-500">
            You can sign up with your mobile number, email <br></br> or your
            Google account
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
              {...register("username", { required: "Username is required!" })}
            />
            {errors.email && (
              <span className="text-red-600 text-xs">
                {errors.username?.message}
              </span>
            )}
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
              {...register("email", { required: "Email is required!" })}
            />
            {errors.email && (
              <span className="text-red-600 text-xs">
                {errors.email?.message}
              </span>
            )}
          </div>

          {/* Phone Number Input */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="text-xs text-gray-600 block font-bold mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full px-3 py-2 border rounded"
              {...register("phone", { required: "Phone Number is required!" })}
            />
            {errors.email && (
              <span className="text-red-600 text-xs">
                {errors.phone?.message}
              </span>
            )}
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
              {...register("password", {
                required: "Password is required!",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-600 text-xs">
                {errors.password?.message}
              </span>
            )}
          </div>

          {/* Login Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-green-800 text-white py-2 rounded hover:bg-green-900"
            >
              Signup
            </button>
          </div>

          {/* Already have an account */}
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-2">
              Already have an account?{" "}
              <span>
                <Link to="/login" className="text-green-800 hover:underline">
                  Please login
                </Link>
              </span>{" "}
            </p>
          </div>

          {/* Continue with Google */}
          <div className="mb-2">
            <button
              onClick={handleGoogleSignIn}
              type="submit"
              className="w-full bg-transparent hover:bg-gray-500 text-gray-600 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
            >
              Continue with Google
            </button>
          </div>
          <div>
            {signupError && (
              <p className="text-xs text-red-600">{signupError}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
