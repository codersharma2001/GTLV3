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
    <div>
      <h1 className="text-lg font-bold px-10 mt-4">Total Players</h1>
      <div className="md:w-auto lg:w-auto xl:w-auto mx-10 my-2 px-8 py-3 overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Round's Name</th>
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
