import { useState, useEffect } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import EventsMenu from "./EventsMenu";

const AddItinerary = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/app/itinerary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          startDate,
          endDate,
          startTime,
          endTime,
        }),
      });
      const data = await response.json();
      setSuccessMessage(data.message);
      setTitle("");
      setDescription("");
      setStartDate("");
      setEndDate("");
      setStartTime("");
      setEndTime("");
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <EventsMenu />
      <div className="md:w-auto lg:w-auto xl:w-auto mx-10 my-2 px-8 py-8">
      {successMessage && (
            <p className="text-green-600 font-medium mb-4">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="text-red-600 font-medium mb-4">{errorMessage}</p>
          )}
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-600 mb-8">
            Add an Itinerary
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="title" className="block font-medium mb-1">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border border-gray-300 rounded-md w-full py-2 px-3"
              />
            </div>
            <div>
              <label htmlFor="description" className="block font-medium mb-1">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border border-gray-300 rounded-md w-full py-2 px-3"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="selectDay" className="block font-medium mb-1">
                Select day
              </label>
              <input
                type="date"
                id="selectDay"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="border border-gray-300 rounded-md w-full py-2 px-3"
              />
            </div>
            <div>
              <label htmlFor="startTime" className="block font-medium mb-1">
                Start time
              </label>
              <input
                type="time"
                id="startTime"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="border border-gray-300 rounded-md w-full py-2 px-3"
              />
            </div>
            <div>
              <label htmlFor="endTime" className="block font-medium mb-1">
                End time
              </label>
              <input
                type="time"
                id="endTime"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="border border-gray-300 rounded-md w-full py-2 px-3"
              />
            </div>
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="bg-green-600 text-white rounded-md py-2 px-4 hover:bg-green-900 w-full mt-3"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddItinerary;
