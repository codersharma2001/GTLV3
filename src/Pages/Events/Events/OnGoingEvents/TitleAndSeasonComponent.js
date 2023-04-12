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
    <div>
      <h1 className="text-lg font-bold px-10 mt-4">Title and Season</h1>
      <div className="md:w-auto lg:w-auto xl:w-auto mx-10 my-2 px-8 py-3 overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Season's Name</th>
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
