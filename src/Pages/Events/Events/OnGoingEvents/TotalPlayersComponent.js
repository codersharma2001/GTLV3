import React, { useState, useEffect } from "react";

const TotalPlayersComponent = () => {
  // Initialize the state variable to an empty array
  const [players, setPlayers] = useState([]);

  // Fetch the data from the API using useEffect hook
  useEffect(() => {
    fetch("http://localhost:8000/api/csv-data")
      .then((response) => response.json())
      .then((data) => {
        // Map the API data to the required format and set it in the state
        const updatedPlayers = data.map((player) => ({
          id: player.eventId,
          name: player.name,
          description: `${player.enrollmentNo} | ${player.campusID} | ${player.emailID}`,
          paymentStatus: player.paymentStatus,
          added: false,
        }));
        setPlayers(updatedPlayers);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleAddPlayer = (id) => {
    const updatedPlayers = players.map((player) =>
      player.id === id ? { ...player, added: true } : player
    );
    setPlayers(updatedPlayers);
  };

  return (
    <div className="sm:px-4 md:px-10 mt-4">
      <h1 className="text-lg font-bold">Total Players</h1>
      <div className="overflow-x-auto mt-2">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="sm:text-sm md:text-base">Player's Name</th>
              <th className="sm:text-sm md:text-base">Description</th>
              <th className="sm:text-sm md:text-base">Action</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id}>
                <th>{player.id}</th>
                <td className="sm:text-sm md:text-base">{player.name}</td>
                <td className="sm:text-sm md:text-base">{player.description}</td>
                <td>
                  {!player.added && (
                    <button
                      className="btn btn-sm btn-success text-white hover:bg-green-600"
                      onClick={() => handleAddPlayer(player.id)}
                    >
                      Details
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalPlayersComponent;
