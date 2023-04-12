import React, { useContext, useState } from "react";
import Logo from "../../Assets/Images/Logo.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { signIn, googleSignIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/dashboard";

  const handleLogin = (data) => {

    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });

  };

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
      const user = result.user;
      navigate(from, { replace: true });
      console.log(user);
    })
    .catch(error => {
      console.error('error: ', error);
    })
  }
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
          onSubmit={handleSubmit(handleLogin)}
          className="w-full max-w-md bg-white rounded-lg shadow-sm p-8"
        >
          <h2 className="text-2xl font-bold mb-2 text-center text-gray-600">
            Let’s get started!
          </h2>
          <p className="text-xs font-bold mb-4 text-center text-gray-500">
            Are you ready to dive into <br></br> the GTL?
          </p>

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
              {...register("email", { required: "Email is required!" })}
            />
            {errors.email && (
              <span className="text-red-600 text-xs">
                {errors.email?.message}
              </span>
            )}
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
              {...register("password", {
                required: "Password is required!",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-600 text-xs">
                {errors.password?.message}
              </span>
            )}
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

          {/* Create New Account */}
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-2">
              Don't have an account?{" "}
              <span>
                <Link to="/signup" className="text-green-800 hover:underline">Create New Account</Link>
              </span>{" "}
            </p>
          </div>

          {/* Continue with Google */}
          <div className="mb-6">
            <button
            onClick={handleGoogleSignIn}
              type="submit"
              className="w-full bg-transparent hover:bg-gray-500 text-gray-600 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
            >
              Continue with Google
            </button>
          </div>
          <div>
            {loginError && <p className="text-xs text-red-600">{loginError}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
