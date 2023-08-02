import React, { useState } from "react";

const SettingsComponent = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Updated Name:", name);
    console.log("Updated Email:", email);
    console.log("Updated Password:", password);
    // Reset the form fields after saving the data (optional)
    setName("");
    setEmail("");
    setPassword("");
    setMessage("Your information is updated!");
    
    setTimeout(() => {
        setMessage("");
      }, 3000); // 3000 milliseconds = 3 seconds
    
  };

  return (
    <div>
      {/* <h2 className="text-xl font-bold mb-4">Settings</h2> */}
      <div className="max-w-md mx-auto bg-white rounded p-8 shadow">
        {/* Profile Picture Upload Form */}
        {profilePicture && (
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">Your Profile Picture:</h3>
            <img src={profilePicture} alt="Profile" className="max-w-xs h-40 px-12 rounded" />
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="profilePicture" className="block font-bold ">
              Profile Picture:
            </label>
            <input
              type="file"
              id="profilePicture"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="p-2 border rounded w-full"
            />
          </div>

          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Your Name"
              className="p-2 border rounded w-full"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Your Email"
              className="p-2 border rounded w-full"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block font-bold mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Your Password"
              className="p-2 border rounded w-full"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600"
          >
            Save Changes
          </button>
        </form>
      </div>
      {message && (
        <div className="fixed bottom-0 left-0 right-0 bg-green-500 text-white py-2 text-center">
          {message}
        </div>
      )}
    </div>
  );
};

export default SettingsComponent;
