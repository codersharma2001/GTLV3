import React from "react";
import Logo from "../../Assets/Images/Logo.png";

const OTPForm = () => {
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
            OTP Verification
          </h2>
          <p className="text-xs font-bold mb-4 text-center text-gray-500">
          We have sent you one time password to <br></br> this number +91 987654321
          </p>
          <form>
            <div className="flex justify-center">
              <input
                type="text"
                maxLength="1"
                className="rounded-lg w-10 h-10 m-2 border border-gray-400 text-2xl text-center font-bold focus:outline-none focus:border-blue-400"
              />
              <input
                type="text"
                maxLength="1"
                className="rounded-lg w-10 h-10 m-2 border border-gray-400 text-2xl text-center font-bold focus:outline-none focus:border-blue-400"
              />
              <input
                type="text"
                maxLength="1"
                className="rounded-lg w-10 h-10 m-2 border border-gray-400 text-2xl text-center font-bold focus:outline-none focus:border-blue-400"
              />
              <input
                type="text"
                maxLength="1"
                className="rounded-lg w-10 h-10 m-2 border border-gray-400 text-2xl text-center font-bold focus:outline-none focus:border-blue-400"
              />
            </div>
          </form>
          {/* Login Button */}
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-green-800 text-white py-2 rounded hover:bg-green-900"
            >
              Submit
            </button>
          </div>

          {/* Create New Account */}
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-2">
              Didn't receive OTP?{" "}
              <span>
                <a href="#" className="text-green-800 hover:underline">
                  Resend OTP
                </a>
              </span>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTPForm;
