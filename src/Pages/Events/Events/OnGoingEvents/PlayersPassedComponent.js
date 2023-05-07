import React, { useState } from "react";

const PlayersPassedComponent = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: "Latham Hunt", paymentStatus: "Passed" },
    { id: 2, name: "John Doe", paymentStatus: "Passed" },
    { id: 3, name: "Jane Smith", paymentStatus: "Passed" },
    { id: 4, name: "Alice Johnson", paymentStatus: "Passed" },
    { id: 5, name: "Bob Williams", paymentStatus: "Passed" },
    { id: 6, name: "Eve Davis", paymentStatus: "Passed" },
    { id: 7, name: "Tom Brown", paymentStatus: "Passed" },
  ]);

  const handlePlayersPassedComponent = (id) => {
    const updatedPlayers = players.map((player) =>
      player.id === id ? { ...player, added: true } : player
    );
    setPlayers(updatedPlayers);
  };

  return (
    <div>
      <h1 className="text-lg font-bold px-4 md:px-10 mt-4">Total Players</h1>
      <div className="w-full overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="px-4 md:px-6 py-2 md:py-3"></th>
              <th className="px-4 md:px-6 py-2 md:py-3">Passed Player's Name</th>
              <th className="px-4 md:px-6 py-2 md:py-3">Description</th>
              <th className="px-4 md:px-6 py-2 md:py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id}>
                <th className="px-4 md:px-6 py-2 md:py-3">{player.id}</th>
                <td className="px-4 md:px-6 py-2 md:py-3">{player.name}</td>
                <td className="px-4 md:px-6 py-2 md:py-3">{player.paymentStatus}</td>
                <td className="px-4 md:px-6 py-2 md:py-3">
                  {!player.added && (
                    <button
                      className="btn btn-sm btn-success text-white hover:bg-green-600"
                      onClick={() => handlePlayersPassedComponent(player.id)}
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

export default PlayersPassedComponent;
