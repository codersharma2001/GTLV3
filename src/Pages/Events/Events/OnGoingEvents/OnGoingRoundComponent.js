import React, { useState } from "react";

const OnGoingRoundComponent = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: "Round - 1", paymentStatus: "Lorem ipsum" },
    { id: 2, name: "Round - 2", paymentStatus: "Lorem ipsum" },
    { id: 3, name: "Round - 3", paymentStatus: "Lorem ipsum" },
    { id: 4, name: "Round - 4", paymentStatus: "Lorem ipsum" },
    { id: 5, name: "Round - 5", paymentStatus: "Lorem ipsum" },
    { id: 6, name: "Round - 6", paymentStatus: "Lorem ipsum" },
    { id: 7, name: "Round - 7", paymentStatus: "Lorem ipsum" },
  ]);

  const handleOnGoingRoundComponent = (id) => {
    const updatedPlayers = players.map((player) =>
      player.id === id ? { ...player, added: true } : player
    );
    setPlayers(updatedPlayers);
  };

  return (
    <div className="w-full">
      <h1 className="text-lg font-bold px-4 py-2">Total Players</h1>
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          {/* head */}
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2"></th>
              <th className="px-4 py-2">Round's Name</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id}>
                <th className="border px-4 py-2">{player.id}</th>
                <td className="border px-4 py-2">{player.name}</td>
                <td className="border px-4 py-2">{player.paymentStatus}</td>
                <td className="border px-4 py-2">
                  {!player.added && (
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleOnGoingRoundComponent(player.id)}
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

export default OnGoingRoundComponent;
