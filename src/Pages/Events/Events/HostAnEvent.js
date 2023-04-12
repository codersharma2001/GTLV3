import { useState } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import EventsMenu from "./EventsMenu";

const HostAnEvent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <>
      <Navbar></Navbar>
      <EventsMenu></EventsMenu>
      <div className=" md:w-auto lg:w-auto xl:w-auto mx-10 my-2  px-8 py-8">
        <form className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-600 mb-8">
            Host a New Event
          </h2>
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
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
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <label htmlFor="coverImage" className="block font-medium mb-1">
                Cover Image
              </label>
              <input
                type="file"
                id="coverImage"
                onChange={(e) => setCoverImage(e.target.files[0])}
                className="border border-gray-300 rounded-md w-full py-2 px-3"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="startDate" className="block font-medium mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  id="startDate"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="border border-gray-300 rounded-md w-full py-2 px-3"
                />
              </div>
              <div>
                <label htmlFor="endDate" className="block font-medium mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  id="endDate"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="border border-gray-300 rounded-md w-full py-2 px-3"
                />
              </div>
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

export default HostAnEvent;
