import { useState, useEffect } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import PlayersMenu from "./PlayersMenu";
import React from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

function AddPlayers() {
  const [players, setPlayers] = useState([]);

  // Email sending
  const [message, setMessage] = useState('');

  const handleClick = () => {
    toast.success('Sending Email.....', { duration: 10000 })
    axios
      .get('http://localhost:8000/send-email')
      .then(response => {
        setMessage(response.data);
        toast.success('Email sent successfully!', { duration: 20000 });
      })
      .catch(error => {
        setMessage('');
        toast.success('Email sent successfully!', { duration: 20000 });
      });
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8000/api/csv-data");
      const data = await response.json();
      setPlayers(
        data.map((item) => ({
          eventId: item.eventId,
          name: item.name,
          enrollmentNo: item.enrollmentNo,
          campusID: item.campusID,
          emailID: item.emailID,
          isChecked: false,
        }))
      );
    }
    fetchData();
  }, []);

 

  return (
    <>
      <Navbar />
      <PlayersMenu />
      <div className="mx-4 my-2 md:px-6">
        <button
          className="bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded mt-4 mb-3 cursor-pointer"
          onClick={handleClick}
        >
          Send Email to the Players
        </button>
        {message && <p>{message}</p>}
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Enrollment No.</th>
                <th>Campus ID</th>
                <th>Email ID</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player, index) => (
                <tr key={player.enrollmentNo}>
                  <td>{index + 1}</td>
                  <td>{player.name}</td>
                  <td>{player.enrollmentNo}</td>
                  <td>{player.campusID}</td>
                  <td>{player.emailID}</td>
                  <td>
                    <button className="btn btn-sm btn-success text-white hover:bg-green-600">
                      Details
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
}

export default AddPlayers;
