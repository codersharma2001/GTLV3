import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import AddCampusMenu from "./AddCampusMenu";

const AddCampus = () => {
  return (
    <>
      <Navbar></Navbar>
      <AddCampusMenu></AddCampusMenu>
      <div className=" md:w-auto lg:w-auto xl:w-auto mx-10 my-2  px-8 py-8">
        <form className="w-full max-w-md bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-center text-gray-600 mb-8">
            Want to add a new campus?
          </h2>

          {/* Username Input */}
          <div className="mb-6">
            <label
              htmlFor="username"
              className="text-xs text-gray-600 block font-bold mb-2"
            >
              Campus Name
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your e email"
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          {/* Username Input */}
          <div className="mb-6">
            <label
              htmlFor="username"
              className="text-xs text-gray-600 block font-bold mb-2"
            >
              Location
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your e email"
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          {/* Login Button */}
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-green-800 text-white py-2 rounded hover:bg-green-900"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCampus;
