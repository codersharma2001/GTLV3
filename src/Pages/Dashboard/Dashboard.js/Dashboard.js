import React from "react";
import Card from "./Card";
import PlayersIcon from "../../../Assets/Icons/Players.png";
import EventIcon from "../../../Assets/Icons/Events.png";
import AddCampusIcon from "../../../Assets/Icons/Add-campus.png";
import ValidatorIcon from "../../../Assets/Icons/Validator.png";
import Navbar from "../../Shared/Navbar/Navbar";

const Dashboard = () => {
  const cards = [
    {
      id: 1,
      icon: <img src={PlayersIcon} />,
      name: "Players",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus integer aliquet quisque etiam.",
    },
    {
      id: 2,
      icon: <img src={EventIcon} />,
      name: "Events",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus integer aliquet quisque etiam.",
    },
    {
      id: 3,
      icon: <img src={AddCampusIcon} />,
      name: "Add Campus",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus integer aliquet quisque etiam.",
    },
    {
      id: 4,
      icon: <img src={ValidatorIcon} />,
      name: "Validator",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus integer aliquet quisque etiam.",
    },
  ];
  return (
    <>
    <Navbar></Navbar>
        <div className="h-screen bg-gray-50 font-regular text-white flex items-center justify-center">
        <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-5">
        {cards.map((card) => (
          <Card
            key={card.id}
            icon={card.icon}
            name={card.name}
            description={card.description}
          />
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default Dashboard;
