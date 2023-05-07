import { useState } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import EventsMenu from "./EventsMenu";

const AddOrganizer = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [bio, setBio] = useState("");
  const [photo, setPhoto] = useState(null);
  const [designation, setDesignation] = useState("");
  const [email, setEmail] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [instagram, setInstagram] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("mobile", mobile);
    formData.append("bio", bio);
    formData.append("designation", designation);
    formData.append("email", email);
    formData.append("facebook", facebook);
    formData.append("twitter", twitter);
    formData.append("linkedin", linkedin);
    formData.append("instagram", instagram);
    if (photo) {
      formData.append("photo", photo);
    }

    try {
      const response = await fetch("http://localhost:8000/api/organizations", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        alert("Organizer added successfully!");
        setName("");
        setMobile("");
        setBio("");
        setDesignation("");
        setEmail("");
        setFacebook("");
        setTwitter("");
        setLinkedin("");
        setInstagram("");
        setPhoto(null);
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      setErrorMessage("Failed to add organizer.");
    }
  };

  return (
    <>
      <Navbar />
      <EventsMenu />
      <div className="md:w-auto lg:w-auto xl:w-auto mx-10 my-2 px-8 py-8">
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-600 mb-8">
            Add a new Organizer
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded-md w-full py-2 px-3"
              />
            </div>
            <div>
              <label htmlFor="designation" className="block font-medium mb-1">
                Designation
              </label>
              <input
                type="text"
                id="designation"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                className="border border-gray-300 rounded-md w-full py-2 px-3"
              />
            </div>
            <div>
              <label htmlFor="mobileNumber" className="block font-medium mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobileNumber"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="border border-gray-300 rounded-md w-full py-2 px-3"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-md w-full py-2 px-3"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-md w-full py-2 px-3"
              />
            </div>
            <div>
              <label htmlFor="photo" className="block font-medium mb-1">
                Upload Photo
              </label>
              <input
                type="file"
                id="photo"
                onChange={(e) => setPhoto(e.target.files[0])}
                className="border border-gray-300 rounded-md w-full py-2 px-3"
              />
            </div>

            <div>
              <label htmlFor="bio" className="block font-medium mb-1">
                Bio
              </label>
              <textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="border border-gray-300 rounded-md w-full py-2 px-3"
              />
            </div>

            <div>
              <label htmlFor="facebook" className="block font-medium mb-1">
                Facebook
              </label>
              <input
                type="text"
                id="facebook"
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
                className="border border-gray-300 rounded-md w-full py-2 px-3"
              />
            </div>
            <div>
              <label htmlFor="facebook" className="block font-medium mb-1">
                Twitter
              </label>
              <input
                type="text"
                id="facebook"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
                className="border border-gray-300 rounded-md w-full py-2 px-3"
              />
            </div>
            <div>
              <label htmlFor="facebook" className="block font-medium mb-1">
                LinkedIn
              </label>
              <input
                type="text"
                id="facebook"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                className="border border-gray-300 rounded-md w-full py-2 px-3"
              />
            </div>
            <div>
              <label htmlFor="facebook" className="block font-medium mb-1">
                Instagram
              </label>
              <input
                type="text"
                id="facebook"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
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
          {errorMessage && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
              <span className="block sm:inline">{errorMessage}</span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg
                  className="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  onClick={() => setErrorMessage("")}
                >
                  <title>Close</title>
                  <path d="M14.348 5.652a.999.999 0 10-1.414 1.414L10 8.414l-2.93 2.93a.999.999 0 101.414 1.414L11.414 10l2.93 2.93a.999.999 0 101.414-1.414L12.828 10l2.52-2.52z" />
                </svg>
              </span>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default AddOrganizer;
