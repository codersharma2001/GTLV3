import React, { useState, useEffect } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import AddCampusMenu from "./AddCampusMenu";

const RegisteredCampuses = () => {
  const [campuses, setCampuses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/campus")
      .then((response) => response.json())
      .then((data) => setCampuses(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <AddCampusMenu></AddCampusMenu>
      <div className="md:w-auto lg:w-auto xl:w-auto mx-10 my-2 px-8 py-8">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Campus Name</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {campuses.map((campus, index) => (
                <tr key={campus.id}>
                  <th>{index + 1}</th>
                  <td>{campus.name}</td>
                  <td>{campus.location}</td>
                  <td>
                    <button className="btn btn-sm btn-success text-white hover:bg-green-600">
                      Add
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RegisteredCampuses;
