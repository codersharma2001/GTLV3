import React, { useState } from "react";

const TotalPlayersComponent = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: "Naim Siddiqui", paymentStatus: "Paid" },
    { id: 2, name: "John Doe", paymentStatus: "Unpaid" },
    { id: 3, name: "Jane Smith", paymentStatus: "Paid" },
    { id: 4, name: "Alice Johnson", paymentStatus: "Unpaid" },
    { id: 5, name: "Bob Williams", paymentStatus: "Paid" },
    { id: 6, name: "Eve Davis", paymentStatus: "Unpaid" },
    { id: 7, name: "Tom Brown", paymentStatus: "Paid" },
  ]);

  const handleAddPlayer = (id) => {
    const updatedPlayers = players.map((player) =>
      player.id === id ? { ...player, added: true } : player
    );
    setPlayers(updatedPlayers);
  };

  return (
    <div>
      <h1 className="text-lg font-bold px-10 mt-4">Total Players</h1>
      <div className="md:w-auto lg:w-auto xl:w-auto mx-10 my-2 px-8 py-3 overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Players Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id}>
                <th>{player.id}</th>
                <td>{player.name}</td>
                <td>{player.paymentStatus}</td>
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
