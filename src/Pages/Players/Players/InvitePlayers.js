import { useState, useEffect } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import PlayersMenu from "./PlayersMenu";

function InvitePlayers() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

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

  const handleCheckboxChange = (player) => {
    const updatedPlayers = players.map((p) =>
      p.enrollmentNo === player.enrollmentNo
        ? { ...p, isChecked: !p.isChecked }
        : p
    );
    setPlayers(updatedPlayers);

    if (player.isChecked) {
      setSelectedPlayers(
        selectedPlayers.filter((p) => p.enrollmentNo !== player.enrollmentNo)
      );
    } else {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  const handleSendEmail = () => {
    console.log("Sending email to selected players:", selectedPlayers);
  };

  return (
    <>
      <Navbar />
      <PlayersMenu />
      <div className="mx-4 my-2 md:px-6">
       
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
                      Invite
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

export default InvitePlayers;
