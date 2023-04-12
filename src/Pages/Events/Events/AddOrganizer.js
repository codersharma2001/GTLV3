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

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <>
      <Navbar />
      <EventsMenu />
      <div className="md:w-auto lg:w-auto xl:w-auto mx-10 my-2 px-8 py-8">
        <form className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-600 mb-8">
            Add a Contact
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
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
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
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
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
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
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

export default AddOrganizer;
