import React, { useState } from "react";

const VanueComponent = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: "Kolkata", paymentStatus: "Lorem ipsum" },
    { id: 2, name: "Chennai", paymentStatus: "UnpLorem ipsumaid" },
    { id: 3, name: "Delhi", paymentStatus: "Lorem ipsum" },
    { id: 4, name: "Rajsthan", paymentStatus: "UnLorem ipsumpaid" },
    { id: 5, name: "Pune", paymentStatus: "Lorem ipsum" },
    { id: 6, name: "Mumbai", paymentStatus: "UnpLorem ipsumaid" },
    { id: 7, name: "Kerala", paymentStatus: "PLorem ipsumaid" },
  ]);

  const handleVanue = (id) => {
    const updatedPlayers = players.map((player) =>
      player.id === id ? { ...player, added: true } : player
    );
    setPlayers(updatedPlayers);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-lg font-bold mt-4">Vnues</h1>
      <div className="my-2 overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="text-left"></th>
              <th className="text-left">Vanue Name</th>
              <th className="text-left">Description</th>
              <th className="text-left">Action</th>
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
                      onClick={() => handleVanue(player.id)}
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

export default VanueComponent;
