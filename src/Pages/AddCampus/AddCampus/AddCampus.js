import React, { useState } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import AddCampusMenu from "./AddCampusMenu";

const AddCampus = () => {
  const [formData, setFormData] = useState({ name: "", location: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/campus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setSuccessMessage("Campus added successfully!");
    } catch (error) {
      setErrorMessage("Error adding campus: " + error.message);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <Navbar></Navbar>
      <AddCampusMenu></AddCampusMenu>
      <div className=" md:w-auto lg:w-auto xl:w-auto mx-10 my-2  px-8 py-8">
        <form
          className="w-full max-w-md bg-white rounded-lg shadow-sm p-8"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-center text-gray-600 mb-8">
            Want to add a new campus?
          </h2>

          {/* Name Input */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="text-xs text-gray-600 block font-bold mb-2"
            >
              Campus Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter the campus name"
              className="w-full px-3 py-2 border rounded"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          {/* Location Input */}
          <div className="mb-6">
            <label
              htmlFor="location"
              className="text-xs text-gray-600 block font-bold mb-2"
            >
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Enter the campus location"
              className="w-full px-3 py-2 border rounded"
              value={formData.location}
              onChange={handleInputChange}
            />
          </div>

          {/* Error or Success Message */}
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}
          {successMessage && (
            <p className="text-green-500 text-sm mb-4">{successMessage}</p>
          )}

          {/* Submit Button */}
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
