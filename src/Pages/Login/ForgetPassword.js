import React, { useContext, useState } from "react";
import Logo from "../../Assets/Images/Logo.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const ForgetPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { forgetPassword } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/dashboard";

  const handleLogin = (data) => {

    console.log(data);
    forgetPassword(data.email)
      .then((result) => {
        toast("Reset email has been sent!");
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
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
          onSubmit={handleSubmit(handleLogin)}
          className="w-full max-w-md bg-white rounded-lg shadow-sm p-8"
        >
          <h2 className="text-2xl font-bold mb-2 text-center text-gray-600">
            Forgot your password?
          </h2>
          <p className="text-xs font-bold mb-4 text-center text-gray-500">
            No worries! we will send you an<br></br> email to reset it
          </p>

          {/* Email Input */}
          <div className="mb-6">
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

          {/* Submit Button */}
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-green-800 text-white py-2 rounded hover:bg-green-900"
            >
              Submit
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

export default ForgetPassword;
