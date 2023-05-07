import React, { useState } from "react";

const TitleAndSeasonComponent = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: "Summer", paymentStatus: "Lorem ipsum" },
    { id: 2, name: "Fall", paymentStatus: "Lorem ipsum" },
    { id: 3, name: "Spring", paymentStatus: "Lorem ipsum" },
    { id: 4, name: "Pre Sumer", paymentStatus: "Lorem ipsum" },
    { id: 5, name: "Pre Winter", paymentStatus: "Lorem ipsum" },
    { id: 6, name: "Winter", paymentStatus: "Lorem ipsum" },
    { id: 7, name: "Summer plus", paymentStatus: "Lorem ipsum" },
  ]);

  const handleTitleAndSeason = (id) => {
    const updatedPlayers = players.map((player) =>
      player.id === id ? { ...player, added: true } : player
    );
    setPlayers(updatedPlayers);
  };

  return (
    <div className="max-w-screen-md mx-auto">
      <h1 className="text-lg font-bold px-4 pt-4">Title and Season</h1>
      <div className="px-4 py-2 overflow-x-auto">
        <table className="table-auto w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="px-2"></th>
              <th className="px-2">Season's Name</th>
              <th className="px-2">Description</th>
              <th className="px-2"></th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id} className="border-b border-gray-200">
                <td className="px-2 py-2">{player.id}</td>
                <td className="px-2 py-2">{player.name}</td>
                <td className="px-2 py-2">{player.paymentStatus}</td>
                <td className="px-2 py-2 text-center">
                  {!player.added && (
                    <button
                      className="px-2 py-1 rounded bg-green-500 hover:bg-green-600 text-white"
                      onClick={() => handleTitleAndSeason(player.id)}
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

export default TitleAndSeasonComponent;
