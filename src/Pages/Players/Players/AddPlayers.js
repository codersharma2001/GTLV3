import { useState } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import PlayersMenu from "./PlayersMenu";

function AddPlayers() {
  const [players, setPlayers] = useState([
    { id: 1, name: "Naim", description: "Lorem ipsum", isChecked: false },
    { id: 2, name: "Naim", description: "Lorem ipsum", isChecked: false },
    { id: 3, name: "Naim", description: "Lorem ipsum", isChecked: false },
    { id: 4, name: "Naim", description: "Lorem ipsum", isChecked: false },
    { id: 5, name: "Naim", description: "Lorem ipsum", isChecked: false },
    { id: 6, name: "Naim", description: "Lorem ipsum", isChecked: false },
    { id: 7, name: "Naim", description: "Lorem ipsum", isChecked: false },
  ]);

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleCheckboxChange = (player) => {
    const updatedPlayers = players.map((p) =>
      p.id === player.id ? { ...p, isChecked: !p.isChecked } : p
    );
    setPlayers(updatedPlayers);

    if (player.isChecked) {
      setSelectedPlayers(selectedPlayers.filter((p) => p.id !== player.id));
    } else {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  const handleSendEmail = () => {
    console.log("Sending email to selected players:", selectedPlayers);
  };

  return (
    <>
      <Navbar></Navbar>
      <PlayersMenu></PlayersMenu>
      <div className="md:w-auto lg:w-auto xl:w-auto mx-10 my-2 px-8 py-3 overflow-x-auto">
        <button
          className="bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded mt-4 mb-3"
          onClick={handleSendEmail}
          disabled={selectedPlayers.length === 0}
        >
          Send Email to Selected Players
        </button>
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id}>
                {/* <th>{player.id}</th> */}
                <td>
                  <input
                    type="checkbox"
                    checked={player.isChecked}
                    onChange={() => handleCheckboxChange(player)}
                  ></input>
                </td>
                <td>{player.name}</td>
                <td>{player.description}</td>
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
    </>
  );
}

export default AddPlayers;
