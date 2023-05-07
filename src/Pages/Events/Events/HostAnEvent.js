import { useState } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import EventsMenu from "./EventsMenu";

const HostAnEvent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [successMsg, setSuccessMsg] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("coverImage", coverImage);
    formData.append("startDate", startDate);
    formData.append("endDate", endDate);
    fetch("http://localhost:8000/api/events", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setSuccessMsg("Event created successfully!");
          setErrorMsg(null);
          setTitle("");
          setDescription("");
          setCoverImage(null);
          setStartDate("");
          setEndDate("");
        } else {
          setErrorMsg("Error creating event.");
          setSuccessMsg(null);
        }
      })
      .catch((error) => {
        console.log(error);
        setErrorMsg("Error creating event.");
        setSuccessMsg(null);
      });
  };


  return (
    <>
    <Navbar />
    <EventsMenu />
    <div className="md:w-auto lg:w-auto xl:w-auto mx-10 my-2 px-4 py-4 md:px-8 md:py-8">
    <form  onSubmit={handleSubmit} className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 md:p-8">
  <h2 className="text-2xl font-bold text-center text-gray-600 dark:text-gray-300 mb-8">
    Host a New Event
  </h2>

  <div className="grid grid-cols-2 gap-4">
    <div className="col-span-2 mb-4">
      <label htmlFor="title" className="block font-medium mb-1">
        Title
      </label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="dark:bg-gray-700 border border-gray-300 dark:border-gray-500 rounded-md w-full py-2 px-3"
      />
    </div>
    <div className="col-span-2 mb-4">
      <label htmlFor="description" className="block font-medium mb-1">
        Description
      </label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="dark:bg-gray-700 border border-gray-300 dark:border-gray-500 rounded-md w-full py-2 px-3"
      />
    </div>
    <div className="col-span-2 mb-4">
      <label htmlFor="coverImage" className="block font-medium mb-1">
        Cover Image
      </label>
      <input
        type="file"
        id="coverImage"
        onChange={(e) => setCoverImage(e.target.files[0])}
        className="dark:bg-gray-700 border border-gray-300 dark:border-gray-500 rounded-md w-full py-2 px-3"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="startDate" className="block font-medium mb-1">
        Start Date
      </label>
      <input
        type="date"
        id="startDate"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="dark:bg-gray-700 border border-gray-300 dark:border-gray-500 rounded-md w-full py-2 px-3"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="endDate" className="block font-medium mb-1">
        End Date
      </label>
      <input
        type="date"
        id="endDate"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="dark:bg-gray-700 border border-gray-300 dark:border-gray-500 rounded-md w-full py-2 px-3"
      />
    </div>
  </div>

  <div className="col-span-2 mt-8">
    <button
      type="submit"
      className="bg-green-600 text-white rounded-md py-2 px-4 hover:bg-green-900 w-full"
    >
      Submit
    </button>
  </div>

  {successMsg && (
    <div className="text-green-500 text-center mt-4">{successMsg}</div>
  )}

  {errorMsg && (
    <div className="text-red-500 text-center mt-4">{errorMsg}</div>
  )}
</form>

      </div>
    </>
  );
};

export default HostAnEvent;
